const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'cfrunway@mail.ru',
      pass: '8vbxrR0Tkn3RjsZrWKXt',
    },
  },
  // {
  //   from: 'Mailer Test <cfrunway@yandex.ru>',
  // },
);

module.exports = transporter;
