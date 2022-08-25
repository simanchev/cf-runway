import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const navigate = useNavigate();

  return (
    <div className="main-wrap">
      <div className="container main-container">
        <div className="welcome-wrap">
          <h3 className="main-title">Планируйте денежные потоки вашего бизнеса</h3>
          <h6>Онлайн прогнозирование денежных потоков и оценка риска кассовых разрывов</h6>
          <h6>Быстро. Удобно. Бесплатно</h6>
          {localStorage.user
            ? <button type="button" className="btn btn-warning btn-welcome" onClick={() => navigate('/profile')}>Начать сейчас</button>
            :
            <button type="button" className="btn btn-warning btn-welcome" data-bs-toggle="modal" data-bs-target="#regModal">Рассчитать</button>}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
