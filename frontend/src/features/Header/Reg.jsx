import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Reg() {
  const dispacth = useDispatch();
  const [regMsg, setRegMsg] = useState('');
  // const navigate = useNavigate();
  async function registration(event) {
    event.preventDefault();
    const {
      name, email, password, passwordConf, autolog,
    } = event.target;
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(passwordConf.value);
    // console.log(autolog.checked);

    const response = await fetch('/api/auth/registration', {
      method: 'POST',
      body: JSON.stringify({
        username: name.value,
        email: email.value,
        password: password.value,
        passwordConf: passwordConf.value,
        autolog: autolog.checked,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (data.isSame === false) {
      setRegMsg('Пароли не совпадают');
    }
    if (data.passwordLength === false) {
      setRegMsg('Пароль должен быть не менее 4 символов');
    }
    if (data.registration === false) {
      setRegMsg('Пользователь с таким email уже существует');
    }
    if (data.registration === true) { // TODO переделать на переход в модалку с авторизацией
      window.location.reload();
    }
    if (data.login === 'now') {
      const userLocal = { localUserName: data.username, id: data.id };
      localStorage.setItem('user', JSON.stringify(userLocal));
      dispacth({ type: 'AUTHENTIC', payload: { username: data.username, auth: data.auth } });
      window.location.replace('/profile');
    }
  }

  return (
    <div className="modal fade" id="regModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Регистрация</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body" style={{ paddingBottom: '0' }}>
            <form id="reg-form" onSubmit={registration}>
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
              {regMsg && <div className="alert alert-danger" role="alert">{regMsg}</div>}
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
