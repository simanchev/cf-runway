import React from 'react';

function ProjectModal() {
  return (
    <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Изменить описание проекта</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form className="modal-form">
              <div className="mb-3">
                <label className="form-label">Название проекта</label>
                <input type="text" className="form-control" name="title" value="Тестовый проект" />
              </div>
              <div className="mb-3">
                <label className="form-label">Индустрия (основное направление)</label>
                <input type="text" className="form-control" name="industry" value="Интернет-торговля" />
              </div>
              <div className="mb-3">
                <label className="form-label">Краткое описание</label>
                <textarea className="form-control">
                  Интернет-магазин одежды и аксессуаров для детей от 3 до 14 лет. Ассортиментный ряд включает множество разнообразных по цвету и фасону моделей повседневной, школьной, спортивной и праздничной одежды
                </textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-dark btn-modal">Сохранить изменения</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
