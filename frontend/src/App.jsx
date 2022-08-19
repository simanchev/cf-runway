import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <div className="mb-3 data-input-wrap">
          <h6>Поступления</h6>
          <div className="data-input-section">
            <input type="input" className="form-control" placeholder="Название операции" />
            <input type="date" className="form-control date-control" placeholder="Дата" />
            <div className="form-check">
              <input className="form-check-input flex-check" type="checkbox" value="" />
              <label className="form-check-label">Ежемесячно</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">+</button>
      </form>
    </div>
  );
}

export default App;
