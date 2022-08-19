import React from 'react';
import RevenueData from './RevenueData';

function App() {
  return (
    <div className="project-container">
      <h4>Тестовый проект</h4>
      <div className="project-resume">
        <div className="card text-bg-warning mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <h5>Резюме</h5>
            <p style={{ margin: '0' }}>(руб)</p>
          </div>
          <div className="card-body">
            <p className="card-text">
              <b>Индустрия</b>
              : торговля
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16" style={{ marginLeft: '5px' }}>
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
            </p>
            <p className="card-text">
              <b>Ежемесячный CF через год</b>
              : 100,000
            </p>
            <p className="card-text">
              <b>Потребность в доп финансировании (сумма / месяц)</b>
              : 100,000 / 02.2023
            </p>
          </div>
        </div>
        <div className="card text-bg-warning mb-3 card-info" style={{ maxWidth: '18rem' }}>
          <div className="card-body">
            <ul>
              <li>
                <p className="card-text">CF (Cash Flow) - денежный поток</p>
              </li>
              <li>
                <p className="card-text">Прогнозный прериод - 12 месяцев, включая текущий</p>
              </li>
              <li>
                <p className="card-text last-card-text">Результаты расчитаны на основе данных, предоставленных пользователем</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fin-data-group">
        <RevenueData />
      </div>
      <button type="submit" className="btn btn-dark">Загрузить отчет о проекте</button>
    </div>
  );
}

export default App;
