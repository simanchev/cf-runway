import React from 'react';
import { useSelector } from 'react-redux';

function FinDataModal() {
  const finData = useSelector((state) => state.finData.curFinData);
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
            <form className="modal-form">
              <div className="mb-3">
                <label className="form-label">Наименование</label>
                <input type="email" className="form-control" name="title" defaultValue={finData.title} placeholder="продажа товаров или услуг" />
              </div>
              <div className="mb-3 modal-flex">
                <div>
                  <label className="form-label">Сумма, руб</label>
                  <input type="number" className="form-control" defaultValue={finData.sum} placeholder="000" />
                </div>
                <div>
                  <label className="form-label">Регулярность</label>
                  <select className="form-select">
                    <option value="true">Eжемесячно</option>
                    <option value="false" selected={(!finData.regular && finData.id)}>Однократно</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 modal-flex">
                <div>
                  <label className="form-label">Месяц начала</label>
                  <input type="month" defaultValue={finData.start_date} className="form-control" />
                </div>
                <div>
                  <label className="form-label">Месяц окончания</label>
                  <input type="month" defaultValue={finData.end_date} className="form-control" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-dark btn-modal">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinDataModal;
