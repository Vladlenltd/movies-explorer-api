const MONGO_DB_URL = 'mongodb://localhost:27017/cinemadb';
const {
  PORT = 3000,
  JWT_SECRET_KEY = 'very-very-secret-key',
} = process.env;

module.exports = {
  MONGO_DB_URL,
  PORT,
  JWT_SECRET_KEY,
};
