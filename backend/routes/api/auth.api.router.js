const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authRouter.post('/registration', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      passwordConf,
    } = req.body;
    const hash = await bcrypt.hash(password, 10);
    console.log(name);

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
      name,
      email,
      password: hash,
    });
    res.status(201).json({ registration: true });

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
    console.log(password, 'pppaaassss');

    const checkedUser = await User.findOne({ where: { email }, raw: true });
    console.log(checkedUser, '>>>>>>>');
    const isSame = await bcrypt.compare(password, checkedUser.password);
    console.log(isSame);
    // console.log(req.session, 'ssseessssion');

    if (checkedUser && isSame) {
      // const isSame = await bcrypt.compare(password, checkedUser.password);
      // console.log(isSame);
      // TODO не заходит в условие когда чектюзер фолс, выкидывает в catch

      req.session.userId = checkedUser.id;
      const { id } = checkedUser;
      req.session.user = { id };
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
// TODO сделать формы умными - условный рендеринг, поправить кнопки
// положить юзера в стейт, сделать валидацию
// доделать чекбокс
