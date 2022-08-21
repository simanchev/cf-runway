const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authRouter.post('/registration', async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      passwordConf,
    } = req.body;
    const hash = await bcrypt.hash(password, 10);
    // console.log(hash);
    if (password !== passwordConf) {
      res.status(500).json({ isSame: false });
    } else {
      res.status(201).json({ isSame: true });
    }

    console.log(password.length);
    if (password.length < 4) {
      res.status(500).json({ length: false });
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ user: false });
    } else {
      await User.create({
        name: username,
        email,
        password: hash,
      });
    }
    // TODO доделать проверки и варианты выполнения их на клиенте + логаут

    //   if (user) {
    //     res.json({ status: 'falure', errorMessage: 'Пользователь уже зарегистрирован' });
    //   } else {
    //     const hash = await bcrypt.hash(password, 10);

    //     await User.create({
    //       username,
    //       email,
    //       password: hash,
    //     });

  //     res.status(201).json({ registration: true, message: '/auth/login' });
  //   }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = authRouter;
