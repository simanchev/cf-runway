require('dotenv').config();
const express = require('express');
const { sequelize } = require('./db/models');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);

// app.listen(PORT, () => console.log(`Server started at ${PORT} port`));

app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    await sequelize.authenticate();
    console.log('База данных ОК!');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
});
