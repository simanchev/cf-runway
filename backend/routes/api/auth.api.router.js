const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const transporter = require('../nodemailer');

const { User } = require('../../db/models');

authRouter.get('/authenticate', (req, res) => {
  try {
    const { user } = req.session;
    if (user) {
      res.json({ auth: true, username: user.name });
    } else {
      res.json({ auth: false });
    }
  } catch (err) {
    console.log(err);
  }
});

authRouter.post('/registration', async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      passwordConf,
      autolog,
    } = req.body;
    const hash = await bcrypt.hash(password, 10);
    console.log(autolog, '++++++++++++++');

    if (password !== passwordConf) { // сравниваем пароли на сервере
      res.status(500).json({ isSame: false });
      return;
    }

    if (password.length < 4) { // валидация по длинне пароля
      res.status(500).json({ passwordLength: false });
      return;
    }

    // ищем юзера. если есть - то "уже зарегистрирован"
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.status(500).json({ registration: false });
      return;
    }
    await User.create({
      name: username,
      email,
      password: hash,
    });
    /// ///////////////////////////////////
    // здесь должна быть рассылка start
    // console.log('мыло пользователя', email);

    const mail = {
      from: '<cfrunway@yandex.ru>',
      to: email,
      subject: `Hi ${username}! You are a member of CF-Runway!`,
      text: `Dear ${username}!`,
      html: '<b>Thank you for registration on CF-Runway!</b>',
    };

    transporter.sendMail(mail, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Message sent: ${response.message}`);
      }

      transporter.close();
    });
    // здесь должна быть рассылка finish
    if (autolog) {
      try {
        const checkedUser = await User.findOne({ where: { email }, raw: true });
        console.log(checkedUser, '>>>>>>>');
        if (checkedUser === null) {
          res.status(500).json({ login: false, message: 'Такого пользователя не существует или неверный пароль!' });
          return;
        }
        const isSame = await bcrypt.compare(password, checkedUser.password);
        // console.log(isSame);
        // console.log(req.session, 'ssseessssion');

        if (checkedUser && isSame) {
        // const isSame = await bcrypt.compare(password, checkedUser.password);
        // console.log(isSame);

          req.session.userId = checkedUser.id;
          const { id, name } = checkedUser;
          req.session.user = { id, name };
          res.json({ login: 'now' });
        } else {
          res.status(500).json({ message: 'Такого пользователя не существует или неверный пароль!' });
        }
      } catch (err) {
        res.status(500).json({ errorMessage: err.message });
      }
    } else {
    /// ///////////////////////////////////////////

      res.status(201).json({ registration: true });
    }
    // TODO отрисовка на клиенте(корректная), чекбокс!!!!!
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const checkedUser = await User.findOne({ where: { email }, raw: true });

    if (checkedUser === null) {
      res.status(500).json({ login: false, message: 'Такого пользователя не существует или неверный пароль!' });
      return;
    }
    const isSame = await bcrypt.compare(password, checkedUser.password);
    // console.log(isSame);
    // console.log(req.session, 'ssseessssion');

    if (checkedUser && isSame) {
      // const isSame = await bcrypt.compare(password, checkedUser.password);
      // console.log(isSame);

      req.session.userId = checkedUser.id;
      const { id, name } = checkedUser;
      req.session.user = { id, name };
      res.json({ login: true });
    } else {
      res.status(500).json({ login: false, message: 'Такого пользователя не существует или неверный пароль!' });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});
authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.json({ logout: true });
});

module.exports = authRouter;

// сделать переход на логу при вырубленном чекбоксе
// сделать личный кабинет!!!!!!!
// куда лучше положить пользователя?!!!!!!!!!!!!!!!!!!!!!1 проверить корректность работы use effect,
//  подружить с миддлваркой resLocals
