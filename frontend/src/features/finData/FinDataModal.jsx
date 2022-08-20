import React from 'react';
import { useSelector } from 'react-redux';

function FinDataModal() {
  const finData = useSelector((state) => state.finData.curFinData);
  const projectId = useSelector((state) => state.projects.curProject.id);

  async function addNewFinData(event) {
    event.preventDefault();
    const {
      title, sum, regular, startDate, endDate,
    } = event.target;

    const response = await fetch(`/api/project/${projectId}/findata/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        fin_types_id: 1,
        title: title.value,
        sum: sum.value,
        regular: regular.value,
        start_date: startDate.value,
        end_date: endDate.value,
      }),
    });
    const data = await response.json();

    if (data.created) window.location.href = '/';
  }

  return (
    <div className="modal fade" id="finDataModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {finData.id ? 'Изменить текущую' : 'Добавить новую'}
              {' '}
              операцию
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form className="modal-form" onSubmit={addNewFinData}>
              <div className="mb-3">
                <label className="form-label">Наименование</label>
                <input type="text" className="form-control" name="title" defaultValue={finData.title} placeholder="продажа товаров или услуг" required />
              </div>
              <div className="mb-3 modal-flex">
                <div>
                  <label className="form-label">Сумма, руб</label>
                  <input type="number" className="form-control" defaultValue={finData.sum} name="sum" placeholder="000" required />
                </div>
                <div>
                  <label className="form-label">Регулярность</label>
                  <select className="form-select" name="regular" required>
                    <option value="true">Eжемесячно</option>
                    <option value="false" selected={(!finData.regular && finData.id)}>Однократно</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 modal-flex">
                <div>
                  <label className="form-label">Месяц начала</label>
                  <input type="month" defaultValue={finData.start_date} className="form-control" name="startDate" required />
                </div>
                <div>
                  <label className="form-label">Месяц окончания*</label>
                  <input type="month" defaultValue={finData.end_date} className="form-control" name="endDate" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-dark btn-modal">{finData.id ? 'Сохранить изменения' : 'Добавить'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinDataModal;
