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

projectRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, industry, description } = req.body;

  try {
    await Project.update(
      { title, industry, description },
      { where: { id } },
    );
    res.status(201).json({ updated: true });
  } catch (err) {
    res.status(500).json({ updated: false, error: 'Не удалось обновить данные проекта' });
  }
});

projectRouter.post('/', async (req, res) => {
  const { id } = req.session.user;
  const { title, industry, description } = req.body;

  try {
    await Project.create({
      user_id: id,
      title,
      industry,
      description,
    });
    res.status(201).json({ created: true });
  } catch (err) {
    res.status(500).json({ created: false, error: 'Не удалось добавить проект' });
  }
});

module.exports = projectRouter;
