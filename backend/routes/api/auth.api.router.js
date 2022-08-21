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
authRouter.get('/logout', (req, res)=>{
  
});

module.exports = authRouter;
