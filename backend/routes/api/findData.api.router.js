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
    const userStartYear = Number(start_date.slice(0, 4));
    const userStartMonth = Number(start_date.slice(5, 7));

    const userEndYear = Number(end_date.slice(0, 4));
    const userEndMonth = Number(end_date.slice(5, 7));

    const curYear = new Date().getFullYear();
    const curMonth = new Date().getMonth() + 1;

    let firstFillMonth = null;
    let lastFillMonth = null;

    if (curYear === userStartYear && userStartMonth >= curMonth) {
      firstFillMonth = userStartMonth - curMonth + 1;
    } else if (userStartYear - curYear === 1 && userStartMonth < curMonth) {
      firstFillMonth = 12 - curMonth + 1 + userStartMonth;
    }

    if (userEndYear) {
      if (curYear === userEndYear && userEndMonth >= curMonth) {
        lastFillMonth = userEndMonth - curMonth + 1;
      } else if (userEndYear - curYear === 1 && userEndMonth < curMonth) {
        lastFillMonth = 12 - curMonth + 1 + userEndMonth;
      }
    } else {
      lastFillMonth = 12;
    }

    const newFinData = {
      project_id: id,
      fin_types_id,
      title,
      sum,
      regular,
      start_date,
      end_date,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    };

    for (let i = 1; i <= 12; i++) {
      if (i === firstFillMonth) {
        newFinData[i] = sum;
      // eslint-disable-next-line max-len
      // } else if (i > firstFillMonth && userStartYear - curYear <= 1 && regular === true) {
      } else if (i > firstFillMonth && i <= lastFillMonth && userStartYear - curYear <= 1 && regular === 'true') {
        newFinData[i] = sum;
      }
    }

    await Fin_data.create(newFinData);
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
