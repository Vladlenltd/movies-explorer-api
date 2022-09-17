const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const { MONGO_DB_URL, PORT } = require('./utils/config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const auth = require('./middlewares/auth');
const { errorHandler } = require('./middlewares/errorHandler');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const errorRouter = require('./routes/error');

const app = express();

mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });
app.use(express.json());

app.use(requestLogger);
app.use(helmet());
app.use(limiter);

app.use(cors());

app.use('/', loginRouter);

app.use(auth);

app.use('/', usersRouter);
app.use('/', moviesRouter);

app.all('*', errorRouter);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App works at port ${PORT}`);
});
