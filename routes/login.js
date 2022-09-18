const loginRouter = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { signupValidator, signinValidator } = require('../middlewares/validator');

loginRouter.post('/signup', signupValidator, createUser);
loginRouter.post('/signin', signinValidator, login);

module.exports = loginRouter;
