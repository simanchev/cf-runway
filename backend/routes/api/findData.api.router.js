/* eslint-disable camelcase */
const finDataRouter = require('express').Router();
const { Fin_data, Schedule } = require('../../db/models');

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
    const newFinData = await Fin_data.create({
      project_id: id,
      fin_types_id,
      title,
      sum,
      regular,
      start_date,
      end_date,
    });

    const scheduleData = {
      fin_data_id: newFinData.id,
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

    const userStartMonth = Number(start_date.slice(0, 4));
    const userStartYear = Number(start_date.slice(5, 7));

    const userEndMonth = Number(start_date.slice(0, 4));
    const userEndYear = Number(start_date.slice(5, 7));

    const curYear = new Date().getFullYear();
    const curMonth = new Date().getMonth() + 1;

    let firstFillMnth = null;
    let lastFillMnth = null;

    if (curYear === userStartYear && userStartMonth >= curMonth) {
      firstFillMnth = userStartMonth - curMonth + 1;
    } else if (userStartYear - curYear === 1 && userStartMonth < curMonth) {
      firstFillMnth = 12 - curMonth + 1 + userStartMonth;
    }

    if (curYear === userEndYear && userEndMonth >= curMonth) {
      lastFillMnth = userEndMonth - curMonth + 1;
    } else if (userEndYear - curYear === 1 && userEndMonth < curMonth) {
      lastFillMnth = 12 - curMonth + 1 + userEndMonth;
    }

    console.log('firstFillMnth:', firstFillMnth);
    console.log('lastFillMnth:', lastFillMnth);

    for (let i = 1; i <= 12; i++) {
      if (i === firstFillMnth) {
        scheduleData[i] = sum;
      } else if (
        i > firstFillMnth
        && i <= lastFillMnth
        && userStartYear - curYear <= 1
        && regular === true) {
        scheduleData[i] = sum;
      }
    }
    await Schedule.create(scheduleData);
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
    console.log('!!!!!!!!!!!!', id);
    res.status(200).json({ deleted: true });
  } catch (err) {
    res.status(500).json({ deleted: false, error: 'Не удалось удалить операцию' });
  }
});

module.exports = finDataRouter;
