const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./session-config');
// const test = require('../routes/api/test');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  // app.use('/', test);
};

module.exports = config;
