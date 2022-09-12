const usersRouter = require('express').Router();
const { usersValidator } = require('../middlewares/validator');
const { getUserInfo, updateUserInfo } = require('../controllers/users');

usersRouter.get('/users/me', getUserInfo);
usersRouter.patch('/users/me', usersValidator, updateUserInfo);

module.exports = usersRouter;
