import React from 'react';
import { useSelector } from 'react-redux';

function FinDataModal() {
  const finData = useSelector((state) => state.finData.curFinData);
  const projectId = useSelector((state) => state.projects.curProject.id);

  async function finDataHandler(event) {
    event.preventDefault();
    const {
      title, sum, regular, startDate, endDate, addBtn,
    } = event.target;

    if (addBtn) {
      const response = await fetch(`/api/project/${projectId}/findata/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          fin_types_id: 2,
          title: title.value,
          sum: sum.value,
          regular: regular.value,
          start_date: startDate.value,
          end_date: endDate.value,
        }),
      });
      const data = await response.json();
      if (data.created) window.location.reload();
    } else {
      const response = await fetch(`/api/findata/${finData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          fin_types_id: 2,
          title: title.value,
          sum: sum.value,
          regular: regular.value,
          start_date: startDate.value,
          end_date: endDate.value,
        }),
      });
      const data = await response.json();
      if (data.updated) window.location.reload();
    }
  }

  async function deleteFinData(event) {
    event.preventDefault();

    const response = await fetch(`/api/findata/${finData.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
    });
    const data = await response.json();

    if (data.deleted) window.location.href = '/';
  }

  return (
    <div className="modal fade" id="modalCostItem" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {finData.id ? 'Изменить текущую операцию' : 'Добавить новые оплаты'}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form className="modal-form" onSubmit={finDataHandler}>
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
                {finData.id
                  ? <button type="submit" className="btn btn-dark btn-modal">Сохранить изменения</button>
                  : <button type="submit" className="btn btn-dark btn-modal" name="addBtn">Добавить</button>}
                {finData.id && <button type="button" onClick={deleteFinData} className="btn btn-danger btn-modal">Удалить</button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinDataModal;
