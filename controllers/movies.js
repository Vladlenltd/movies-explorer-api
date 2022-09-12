const Movie = require('../models/movie');
const BadRequest = require('../errors/badRequest');
const NotFoundError = require('../errors/notFoundError');
const AccessError = require('../errors/accessError');

module.exports.createMovie = (req, res, next) => {
  const owner = req.user._id;
  Movie.create({ owner, ...req.body })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new NotFoundError('Данные не найдены'));
      } else {
        next(error);
      }
    });
};

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => {
      res.status(200).send(movies);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequest('Некорректные данные'));
      } else {
        next(error);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const owner = req.user._id;
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(`Фильм с указанным id: ${movieId} не найдена`);
      }
      if (movie.owner.toString() !== owner) {
        throw new AccessError('Недостаточно прав для удаления');
      } else {
        Movie.findByIdAndRemove(movieId)
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((error) => {
            if (error.name === 'CastError') {
              next(new BadRequest(`Фильм с id:${movieId} не найдена`));
            }
            next(error);
          })
          .catch(next);
      }
    })
    .catch(next);
};
