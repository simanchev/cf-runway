/* eslint-disable camelcase */
/* eslint-disable no-plusplus */

function getSchedule(finDataArr) {
  finDataArr.forEach((finData) => {
    const { sum, regular, start_date, end_date } = finData;
    const dataSchedule = {};

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
      } else {
        lastFillMonth = 12;
      }
    }

    for (let i = 1; i <= 12; i++) {
      if (i === firstFillMonth) {
        dataSchedule[i] = sum;
      } else if (i > firstFillMonth && i <= lastFillMonth && userStartYear - curYear <= 1 && regular) {
        dataSchedule[i] = sum;
      } else if (i > firstFillMonth && !lastFillMonth && regular) {
        dataSchedule[i] = sum;
      } else {
        dataSchedule[i] = 0;
      }
    }

    finData.schedule = dataSchedule;
  });

  return finDataArr;
}

export default getSchedule;
