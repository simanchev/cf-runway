const monthNames = [
  'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
];

const curMonthNumbers = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 12; i++) {
  curMonthNumbers.push(new Date().getMonth() + i < 12 ? new Date().getMonth() + i : new Date().getMonth() + i - 12);
}

const curMonthNames = curMonthNumbers.map((num) => {
  let monthName = '';
  if (curMonthNumbers[0] === 0) {
    monthName = `${monthNames[num]} ${String(new Date().getFullYear()).slice(2)}`;
  } else if (num <= 11 && num >= curMonthNumbers[0]) {
    monthName = `${monthNames[num]} ${String(new Date().getFullYear()).slice(2)}`;
  } else {
    monthName = `${monthNames[num]} ${String(new Date().getFullYear() + 1).slice(2)}`;
  }

  return monthName;
});

export default curMonthNames;
