const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

const curMonthNumbers = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 12; i++) {
  curMonthNumbers.push(new Date().getMonth() + i < 12 ? new Date().getMonth() + i : new Date().getMonth() + i - 12);
}

const curMonthNames = curMonthNumbers.map((num) => monthNames[num]);

export default curMonthNames;
