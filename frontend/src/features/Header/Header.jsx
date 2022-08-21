import React from 'react';
import Log from './Log';
import Reg from './Reg';

function Header() {
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
        </ul>
      </div>
      <Log />
      <Reg />
    </nav>
  );
}

export default Header;
