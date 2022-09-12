const express = require('express');
const mongoose = require('mongoose');
const { MONGO_DB_URL, PORT } = require('./utils/config');

const app = express();

mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App works at port ${PORT}`);
});

app.use(express.json());
