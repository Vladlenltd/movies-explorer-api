const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const AuthError = require('../errors/authError');
const { USER_SCHEMA_REQ_ERROR, USER_SCHEMA_VAL_ERROR, USER_SCHEMA_AUTH_ERROR } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, USER_SCHEMA_REQ_ERROR.EMAIL],
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: USER_SCHEMA_VAL_ERROR.EMAIL,
    },
  },
  password: {
    type: String,
    required: [true, USER_SCHEMA_REQ_ERROR.PASSWORD],
    select: false,
  },
  name: {
    type: String,
    required: [true, USER_SCHEMA_REQ_ERROR.NAME],
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = function auth(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new AuthError(USER_SCHEMA_AUTH_ERROR);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new AuthError(USER_SCHEMA_AUTH_ERROR);
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
