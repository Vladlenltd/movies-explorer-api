const mongoose = require('mongoose');
const validator = require('validator');
const { MOVIE_SCHEMA_REQ_ERROR, MOVIE_SCHEMA_VAL_ERROR } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.COUNTRY],
  },
  director: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.DIRECTOR],
  },
  duration: {
    type: Number,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.DURATION],
  },
  year: {
    type: Number,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.YEAR],
  },
  description: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.DESCRIPTION],
  },
  image: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.IMAGE],
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: MOVIE_SCHEMA_VAL_ERROR.IMAGE,
    },
  },
  trailerLink: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.TRAILER],
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: MOVIE_SCHEMA_VAL_ERROR.TRAILER,
    },
  },
  thumbnail: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.THUMBNAIL],
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: MOVIE_SCHEMA_VAL_ERROR.THUMBNAIL,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.OWNER],
    ref: 'user',
  },
  movieId: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.MOVIE_ID],
  },
  nameRU: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.NAMERU],
  },
  nameEN: {
    type: String,
    required: [true, MOVIE_SCHEMA_REQ_ERROR.NAMEEN],
  },
});

module.exports = mongoose.model('movie', movieSchema);
