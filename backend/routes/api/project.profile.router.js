const profileRouter = require('express').Router();
const { Project } = require('../../db/models');

profileRouter.get('/profile', async (req, res) => {
  try {
    console.log(req.session.user.id, 'iiiidddd');
    const project = await Project.findAll({ raw: true });
    const result = project.filter((el) => el.user_id === req.session.user.id);
    console.log(result, '----');
    res.status(200).json({ result });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = profileRouter;
