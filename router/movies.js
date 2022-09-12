const moviesRouter = require('express').Router();
const { createMovie, getMovies, deleteMovie } = require('../controllers/movies');

moviesRouter.get('/movies', getMovies);
moviesRouter.post('/movies', createMovie);
moviesRouter.delete('/movies/:movieId', deleteMovie);
