import React from 'react';
import Log from './Log';
import Reg from './Reg';

function Header() {
  async function logout(e) {
    e.preventDefault();
    if (e) {
      const response = await fetch('/api/auth/logout');
      const data = await response.json();
      console.log(data);
    }
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <a className="navbar-brand" href="/">CF Runway</a>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button type="button" className="btn btn-dark btn-header" data-bs-toggle="modal" data-bs-target="#logModal">Вход</button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-dark btn-header" data-bs-toggle="modal" data-bs-target="#regModal" id="reg-link">Регистрация</button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-dark btn-header" data-bs-toggle="modal" data-bs-target="#regModal" id="logout" onClick={logout}>Выход</button>
          </li>
        </ul>
      </div>
      <Log />
      <Reg />
    </nav>
  );
}

export default Header;
