import React from 'react';

function MainContent() {
  return (
    <div className="main-wrap">
      <div className="container main-container">
        <div className="welcome-wrap">
          <h3 style={{ marginBottom: '30px' }}>Онлайн сервис прогнозирования денежных потоков</h3>
          <button type="button" className="btn btn-warning">Добавить проект</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
