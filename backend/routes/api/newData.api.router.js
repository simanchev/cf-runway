const newDataRouter = require('express').Router();
const {
  Fin_data, Schedule,
} = require('../../db/models');

// const finData = {
//   title: 'Шава', type: '', date: { month: 5, year: 2022 }, regular: true, sum: 500000, id: 2,
// };
// const finData = {
//   title: 'Шава', type: '', date: { month: 2, year: 2020 }, regular: true, sum: 500000, id: 2,
// };
newDataRouter.post('/findata/new', async (req, res) => {
  console.log('+++++++++++')
  // await Project.create({ user_id: finData.id, title: finData.title });

  const {
    title, type, month, year, regular, sum,
  } = req.body;
  console.log(title, '+++++++++++');
  const { id } = await Fin_data.create({
    fin_types_id: type, project_id: 1, title, sum, regular, date: year,
  });

  const scheduleData = {
    fin_data_id: id,
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

  const curYear = new Date().getFullYear();
  const curMnth = new Date().getMonth() + 1;
  let firstFillMnth = null;

  if (curYear === year && month >= curMnth) {
    firstFillMnth = month - curMnth + 1;
  } else if (year - curYear === 1 && month < curMnth) {
    firstFillMnth = 12 - curMnth + 1 + month;
  }

  for (let i = 1; i <= 12; i++) {
    if (i === firstFillMnth) {
      scheduleData[i] = sum;
    } else if (i > firstFillMnth && year - curYear <= 1 && regular === true) {
      scheduleData[i] = sum;
    }
  }

  await Schedule.create(scheduleData);

  // console.log(scheduleData);

  // if (finData.regular) {
  //   if (finData.date.month <= mnth && finData.date.year <= yr) {
  //     await Schedule.create({
  //       fin_data_id: finData.id,
  //       m1: finData.sum,
  //       m2: finData.sum,
  //       m3: finData.sum,
  //       m4: finData.sum,
  //       m5: finData.sum,
  //       m6: finData.sum,
  //       m7: finData.sum,
  //       m8: finData.sum,
  //       m9: finData.sum,
  //       m10: finData.sum,
  //       m11: finData.sum,
  //       m12: finData.sum,
  //     });
  //   }
  // }

  res.send('ok');
});
module.exports = newDataRouter;
