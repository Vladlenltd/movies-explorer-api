const moviesRouter = require('express').Router();
const { createMovie, getMovies, deleteMovie } = require('../controllers/movies');
const { moviesPostValidator, moviesDeleteValidator } = require('../middlewares/validator');

moviesRouter.get('/movies', getMovies);
moviesRouter.post('/movies', moviesPostValidator, createMovie);
moviesRouter.delete('/movies/:movieId', moviesDeleteValidator, deleteMovie);

module.exports = moviesRouter;
