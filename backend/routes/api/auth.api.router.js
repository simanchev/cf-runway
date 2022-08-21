const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authRouter.post('', async (req, res)=>{
  try {
    const {
      username,
      email,
      password,
    } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      res.json({ status: 'falure', errorMessage: 'Пользователь уже зарегистрирован' });
    } else {
      const hash = await bcrypt.hash(password, 10);

      await User.create({
        username,
        email,
        password: hash,
      });

      res.status(201).json({ registration: true, message: '/auth/login' });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
})



module.exports = authRouter
