const errorRouter = require('express').Router();
const NotFoundError = require('../errors/notFoundError');

errorRouter.all('*', (req, res, next) => {
  next(new NotFoundError('Страницы не существует'));
});

module.exports = errorRouter;
