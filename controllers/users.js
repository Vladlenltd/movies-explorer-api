const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequest = require('../errors/badRequest');
const DuplicateKeyError = require('../errors/duplicateKeyError');
const { JWT_SECRET_KEY } = require('../utils/config');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.createUser = (req, res, next) => {
  const { email, name, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, name, password: hash }))
    .then((data) => {
      res.status(200).send({
        email: data.email,
        name: data.name,
        _id: data._id,
      });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequest('Не верные данные'));
      } else if (error.code === 11000) {
        next(new DuplicateKeyError('Пользователь с указнным email существует'));
      } else {
        next(error);
      }
    });
};

module.exports.getUserInfo = (req, res, next) => {
  const userId = req.user._id;
  return User.findById(userId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(next);
};

module.exports.updateUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  const userId = req.user._id;
  User.findByIdAndUpdate(userId, { name, email }, { new: true, runValidators: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequest('Некоректные данные'));
      } else if (error.code === 11000) {
        next(new DuplicateKeyError('Пользователь с указнным email существует'));
      } else {
        next(error);
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_KEY, { expiresIn: '7d' });
      res.status(200).send({ token });
    })
    .catch(next);
};
