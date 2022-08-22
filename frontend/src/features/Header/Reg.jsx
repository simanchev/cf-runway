import React from 'react';

function Reg() {
  return (
    <div className="modal fade" id="regModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Регистрация</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body" style={{ paddingBottom: '0' }}>
            <form id="reg-form">
              <div className="mb-3">
                <input type="text" className="form-control" name="name" placeholder="Имя" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="email" placeholder="Email адрес" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" name="password" placeholder="Пароль" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" name="passwordConf" placeholder="Подтверждение пароля" required />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="autolog-check" name="autolog" />
                <label className="form-check-label" htmlFor="autolog-check">Войти при регистрации</label>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-dark">Создать аккаунт</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;
