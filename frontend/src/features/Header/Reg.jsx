import React, { useState } from 'react';

function Reg() {
  const [text, setText] = useState('');

  async function registration(event) {
    event.preventDefault();
    const {
      name, email, password, passwordConf, autolog,
    } = event.target;
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(passwordConf.value);
    console.log(autolog.checked);

    const response = await fetch('/api/auth/registration', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
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
    console.log(data);
    if (data.isSame === false) { // TODO не работают когда разные пароли(не отображается стейт)
      setText('Пароли не совпадают!');
    }
    if (data.isSame === true) {
      setText('');
    }
    if (data.passwordLength === false) {
      setText('Слишком короткий пароль!');
    }
    if (data.passwordLength !== false) {
      setText('');
    }
    if (data.registration === false) {
      setText('Пользователь с таким email уже существует');
    }
    if (data.registration === true) {
      window.location.replace('/');
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
              <div className="isSame">{text}</div>
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
