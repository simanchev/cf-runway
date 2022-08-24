import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

function Log() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [log, setLogin] = useState(true);
  async function login(e) {
    e.preventDefault();
    const { email, password } = e.target;
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (data.login === false) {
      setLogin(data.message);
    }
    if (data.login === true) {
      dispatch({ type: 'AUTHENTIC', payload: { username: data.username, auth: data.auth } });
      const userLocal = { localUserName: data.username, id: data.id };
      localStorage.setItem('user', JSON.stringify(userLocal));
      window.location.replace('/');
    }
  }
  return (
    <div className="modal fade" id="logModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Авторизация</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body" style={{ paddingBottom: '0' }}>
            <form id="log-form" onSubmit={login}>
              <div className="mb-3">
                <input type="email" className="form-control" name="email" placeholder="Email адрес" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" name="password" placeholder="Пароль" required />
              </div>
              <div>{log}</div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-dark">Вход</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
