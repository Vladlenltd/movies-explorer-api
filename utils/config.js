const MONGO_DB_URL = 'mongodb://localhost:27017/cinemadb';
const { PORT = 3000 } = process.env;

module.exports = {
  MONGO_DB_URL,
  PORT,
};
