/* eslint-disable camelcase */
const finDataRouter = require('express').Router();
const { Fin_data } = require('../../db/models');

finDataRouter.get('/:id/findata', async (req, res) => {
  const { id } = req.params;

  try {
    const finData = await Fin_data.findAll({ raw: true, where: { project_id: id } });
    res.status(201).json(finData);
  } catch (err) {
    res.status(500).json({ error: 'Проект не найден' });
  }
});

module.exports = finDataRouter;
