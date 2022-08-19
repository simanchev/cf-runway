const newDataRouter = require('express').Router();
const {
  Fin_data, Fin_types, Project, Schedule,
} = require('../../db/models');

const finData = {
  title: 'Шава', type: '', date: { month: 5, year: 2022 }, regular: true, sum: 500000, id: 2,
};

newDataRouter.get('/findata/new', async (req, res) => {
  const date = new Date();
  const mnth = date.getMonth();
  const yr = date.getFullYear();
  console.log(mnth);
  console.log(yr);

  await Project.create({ user_id: finData.id, title: finData.title });
  await Fin_data.create({
    fin_types_id: finData.id, project_id: 2, title: 'rashodi', sum: 150, regular: true, date: finData.date,
  });
  // заполнить график скедл, исходя из 3 параметров с клиента - сумма, старт(в какой месяц), условие регулярности(однократно или нет)
  // const objNumbers = {
  //   m1: 1,
  //   m2: 2,
  //   m3: 3,
  //   m4: 4,
  //   m5: 5,
  //   m6: 6,
  //   m7: 7,
  //   m8: 8,
  //   m9: 9,
  //   m10: 10,
  //   m11: 11,
  //   m12: 12,
  // };

  // if (finData.date.month === mnth) {

  //   await Schedule.create({

  //   });
  // }
  if (finData.regular) {
    if (finData.date.month <= mnth && finData.date.year <= yr) {
      await Schedule.create({
        fin_data_id: finData.id,
        m1: finData.sum,
        m2: finData.sum,
        m3: finData.sum,
        m4: finData.sum,
        m5: finData.sum,
        m6: finData.sum,
        m7: finData.sum,
        m8: finData.sum,
        m9: finData.sum,
        m10: finData.sum,
        m11: finData.sum,
        m12: finData.sum,
      });
    }
  }
  if(!finData.regular){

  }
  

  res.send('ok');
});
module.exports = newDataRouter;
