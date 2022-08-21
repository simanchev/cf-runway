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
    console.log(req.body.checked);
    const hash = await bcrypt.hash(password, 10);
    // console.log(hash);
    if (password !== passwordConf) {
      res.status(500).json({ isSame: false });
    } else {
      let re = /@/
     let x = re.test( password)
    
      res.status(201).json({ isSame: true });
    }

    //   const user = await User.findOne({ where: { email } });

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
