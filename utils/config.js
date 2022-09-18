require('dotenv').config();

const {
  PORT = 3000,
  JWT_SECRET_KEY = 'very-very-secret-key',
  MONGO_DB_URL = 'mongodb://localhost:27017/moviesdb',
  MONGO_PROD_URL,
  NODE_ENV,
} = process.env;

module.exports = {
  MONGO_DB_URL,
  PORT,
  JWT_SECRET_KEY,
  MONGO_PROD_URL,
  NODE_ENV,
};
