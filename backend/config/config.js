const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const sessionConfig = require('./session-config');
const projectRouter = require('../routes/api/project.api.router');
const finDataRouter = require('../routes/api/finData.api.router');
const authRouter = require('../routes/api/auth.api.router');
const profileRouter = require('../routes/api/project.profile.router');
// const isAuth = require('../middlewares/isAuth');

const config = (app) => {
  app.use(helmet.hidePoweredBy());
  app.use(helmet.xssFilter());
  app.use(helmet.referrerPolicy());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(express.json());
  app.use(cookieParser());
  // app.use(isAuth);
  app.use(session(sessionConfig));
  app.use('/api/project', projectRouter);
  app.use('/api/', finDataRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/user', profileRouter);
};
// todo узнать совместимость мидлварки с реактом, как подружить?
module.exports = config;
