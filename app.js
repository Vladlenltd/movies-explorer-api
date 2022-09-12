const express = require('express');
const mongoose = require('mongoose');
const { MONGO_DB_URL, PORT } = require('./utils/config');
// const auth = require('./middlewares/auth');
// const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const app = express();

mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });
app.use(express.json());

app.use('/', loginRouter);
// app.use(auth);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App works at port ${PORT}`);
});
