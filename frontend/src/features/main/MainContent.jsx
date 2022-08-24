import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const navigate = useNavigate();

  return (
    <div className="main-wrap">
      <div className="container main-container">
        <div className="welcome-wrap">
          <h3 className="main-title">Сколько нужно денег на твой новый проект</h3>
          <h6>Онлайн-сервис для прогнозирования денежных потоков любого бизнеса на 12 месяцев.</h6>
          <h6>Быстро. Удобно. Бесплатно.</h6>
          {localStorage.user
            ? <button type="button" className="btn btn-warning btn-welcome" onClick={() => navigate('/profile')}>Рассчитать</button>
            :
            <button type="button" className="btn btn-warning btn-welcome" data-bs-toggle="modal" data-bs-target="#regModal">Рассчитать</button>}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
