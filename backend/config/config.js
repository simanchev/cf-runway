const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./session-config');
const newDataRouter = require('../routes/api/newData.api.router');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use('/api', newDataRouter);
};

module.exports = config;
