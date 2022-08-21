import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addFinData from './functions/addFinData';
import updateFinData from './functions/updateFinData copy';
import deleteFinData from './functions/deleteFinData';
import actionType from '../store/actions';

function ModalRevenueItem() {
  const dispatch = useDispatch();
  const finData = useSelector((state) => state.finData.curFinData);
  const project = useSelector((state) => state.projects.curProject);
  const finTypeId = 1;

  async function reloadFinData() {
    const response = await fetch(`/api/project/${project.id}/findata`);
    const projectFinData = await response.json();
    dispatch({ type: actionType.LOAD_FIN_DATA, payload: projectFinData });
  }

  async function addUpdateDataHandler(event) {
    event.preventDefault();
    if (!finData.id) {
      await addFinData(event, project.id, finTypeId);
    } else {
      await updateFinData(event, finData.id);
    }
    reloadFinData();
    event.target.reset();
  }

  async function deleteDataHandler() {
    await deleteFinData(finData.id);
    reloadFinData();
    document.querySelector('.modal-form').reset();
  }

  return (
    <div className="modal fade" id="modalRevenueItem" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {finData.id ? 'Изменить текущую операцию' : 'Добавить новые поступления'}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form className="modal-form" onSubmit={addUpdateDataHandler}>
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
                  ? <button type="submit" className="btn btn-dark btn-modal" data-bs-dismiss="modal">Сохранить изменения</button>
                  : <button type="submit" className="btn btn-dark btn-modal" name="addBtn" data-bs-dismiss="modal">Добавить</button>}
                {finData.id && <button type="button" onClick={deleteDataHandler} className="btn btn-danger btn-modal" data-bs-dismiss="modal">Удалить</button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRevenueItem;
