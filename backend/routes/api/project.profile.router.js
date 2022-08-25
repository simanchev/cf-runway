const profileRouter = require('express').Router();
const { Project } = require('../../db/models');

profileRouter.get('/profile', async (req, res) => {
  try {
    const project = await Project.findAll({
      raw: true,
      order: [
        ['id', 'ASC'],
      ],
    });
    const result = project.filter((el) => el.user_id === req.session.user.id);
    res.status(200).json({ result });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = profileRouter;
