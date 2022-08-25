const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

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

    if (autolog) {
      try {
        const checkedUser = await User.findOne({ where: { email }, raw: true });
        if (checkedUser === null) {
          res.status(500).json({ login: false, message: 'Неверный email или пароль' });
          return;
        }
        const isSame = await bcrypt.compare(password, checkedUser.password);

        if (checkedUser && isSame) {
          const { id, name } = checkedUser;
          req.session.user = { id, name };
          res.json({
            login: 'now', username: name, id, auth: true,
          });
        } else {
          res.status(500).json({ message: 'Неверный email или пароль' });
        }
      } catch (err) {
        res.status(500).json({ errorMessage: err.message });
      }
    } else {
      res.status(201).json({ registration: true });// правильный вариант
    }
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
      res.status(500).json({ login: false, message: 'Неверный email или пароль' });
      return;
    }
    const isSame = await bcrypt.compare(password, checkedUser.password);

    if (checkedUser && isSame) {
      const { id, name } = checkedUser;
      req.session.user = { id, name };
      res.json({
        login: true, username: name, id, auth: true,
      });
    } else {
      res.status(500).json({ login: false, message: 'Неверный email или пароль' });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});
authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.json({ logout: true, auth: false, name: '' });// дописать dispatch чтобы статус в стейте поменять
});

module.exports = authRouter;
