import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const navigate = useNavigate();

  return (
    <div className="main-wrap">
      <div className="container main-container">
        <div className="welcome-wrap">
          {/* <h3 className="main-title">Считаем сколько нужно денег на твой проект</h3>
          <h6>Онлайн-сервис для прогнозирования денежных потоков и бизнес-планирования</h6> */}
          {/* <h3 className="main-title">Планирование денежных <br />потоков для стартапов <br />и малого бизнеса</h3> */}
          <h3 className="main-title">Планируйте денежные потоки вашего бизнеса</h3>
          <h6>Онлайн-сервис финансового контроля и поиска потенциальных кассовых разрывов</h6>
          <h6>Быстро. Удобно. Бесплатно</h6>
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
