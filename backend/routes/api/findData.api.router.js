/* eslint-disable camelcase */
const finDataRouter = require('express').Router();
const { Fin_data } = require('../../db/models');

finDataRouter.get('/project/:id/findata', async (req, res) => {
  const { id } = req.params;

  try {
    const finData = await Fin_data.findAll({ raw: true, where: { project_id: id } });
    res.status(201).json(finData);
  } catch (err) {
    res.status(500).json({ error: 'Проект не найден' });
  }
});

finDataRouter.post('/project/:id/findata/new', async (req, res) => {
  const { id } = req.params;
  const {
    fin_types_id, title, sum, regular, start_date, end_date,
  } = req.body;

  try {
    await Fin_data.create({
      project_id: id,
      fin_types_id,
      title,
      sum,
      regular,
      start_date,
      end_date,
    });
    res.status(201).json({ created: true });
  } catch (err) {
    res.status(500).json({ created: false, error: 'Не удалось сохранить операцию' });
  }
});

finDataRouter.put('/findata/:id', async (req, res) => {
  const { id } = req.params;
  const {
    fin_types_id, title, sum, regular, start_date, end_date,
  } = req.body;

  try {
    await Fin_data.update({
      fin_types_id,
      title,
      sum,
      regular,
      start_date,
      end_date,
    }, {
      where: { id },
    });
    res.status(201).json({ updated: true });
  } catch (err) {
    res.status(500).json({ updated: false, error: 'Не удалось сохранить изменения' });
  }
});

finDataRouter.delete('/findata/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Fin_data.destroy({ where: { id } });
    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(500).json({ deleted: false, error: 'Не удалось удалить операцию' });
  }
});

module.exports = finDataRouter;
