import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Log from './Log';
import Reg from './Reg';

function Header() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const datas = useSelector((state) => state.auth);
  const { name } = datas;
  const user = localStorage.getItem('user');

  async function logout(e) {
    e.preventDefault();
    if (e) {
      const response = await fetch('/api/auth/logout');
      const data = await response.json();
      if (data.logout) {
        localStorage.clear();
        dispacth({ type: 'LOGOUT', payload: data });
        window.location.replace('/');
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="logo-wrap" to="/">
          <img className="logo" src="cfr-logo.png" alt="logo" />
          <span className="navbar-brand">CF Runway</span>
        </Link>
        <ul className="nav justify-content-end">
          {((user !== null) || name)
            ? (
              <>
                <li className="nav-item">
                  <button type="button" className="btn btn-dark btn-header btn-projects" onClick={() => navigate('/profile')}>Мои проекты</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-dark btn-header" id="logout" onClick={logout}>Выход</button>
                </li>

              </>
            ) : (
              <>
                <li className="nav-item">
                  <button type="button" className="btn btn-dark btn-header" data-bs-toggle="modal" data-bs-target="#logModal">Вход</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-dark btn-header" data-bs-toggle="modal" data-bs-target="#regModal" id="reg-link">Регистрация</button>
                </li>
              </>
            )}

        </ul>
      </div>
      <Log />
      <Reg />
    </nav>
  );
}

export default Header;
