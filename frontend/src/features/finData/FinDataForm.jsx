import React from 'react';

async function addFinData(event) {
  event.preventDefault();
  const {
    title, date, sum, regular,
  } = event.target;

  const response = await fetch('/api/findata/new', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      title: title.value,
      type: 1,
      date: {
        year: date.slice(0, 4),
        month: date.slice(5, 7),
      },
      regular,
      sum,
    }),
  });

  const data = await response.json();
  console.log(data);
}

function FinDataForm() {
  return (
    <form onSubmit={addFinData}>
      <div className="mb-3 data-input-wrap">
        <h6>Поступления</h6>
        <div className="data-input-section">
          <input type="input" name="title" className="form-control" placeholder="Название операции" />
          <input type="number" name="sum" className="form-control number-control" placeholder="Сумма" />
          <input type="date" name="date" className="form-control date-control" placeholder="Дата" />
          <div className="form-check">
            <input className="form-check-input flex-check" name="regular" type="checkbox" value="" />
            <label className="form-check-label">Ежемесячная операция</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}

export default FinDataForm;
