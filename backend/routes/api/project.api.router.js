const projectRouter = require('express').Router();
const { Project } = require('../../db/models');

projectRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findOne({ where: { id } });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Проект не найден' });
  }
});

module.exports = projectRouter;
