const usersRouter = require('express').Router();
const { getUserInfo, updateUserInfo } = require('../controllers/users');

usersRouter.get('/usesrs/me', getUserInfo);
usersRouter.patch('/users/me', updateUserInfo);
