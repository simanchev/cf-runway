const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'cfrunway@yandex.ru',
      pass: '1QazXsw2/',
    },
  },
  // {
  //   from: 'Mailer Test <cfrunway@yandex.ru>',
  // },
);

module.exports = transporter;
