import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Range() {
  const dispatch = useDispatch();
  const inputRevenueAdj = useSelector((st) => st.projects.revenueAdj);
  const inputCostAdj = useSelector((st) => st.projects.costAdj);

  function changeValue(e) {
    if (e.target.id === '1') {
      dispatch({ type: 'REVENUE', payload: e.target.value });
    } else {
      dispatch({ type: 'COST', payload: e.target.value });
    }
  }

  function clearRange(e) {
    e.preventDefault();
    dispatch({ type: 'REVENUE', payload: 0 });
    dispatch({ type: 'COST', payload: 0 });
  }

  return (
    <div className="range-container">
      <div className="col-sm-4">
        <div style={{ marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button type="submit" className="btn btn-dark btn-range" data-bs-toggle="collapse" href="#collapseRange">Сценарное моделирование</button>
        </div>
      </div>
      <div className="range-section collapse" id="collapseRange">
        <div style={{ width: '100%', height: '30px' }} />
        <div className="range-wrap">
          <div className="col-sm-4">
            <div>
              <p style={{ marginRight: '10px' }}>Изменение сумм поступлений:</p>
              <p className="range-value">{inputRevenueAdj}%</p>
            </div>
          </div>
          <div className="col-sm-8">
            <input type="range" className="form-range" min="-50" value={inputRevenueAdj} id="1" max="50" onChange={changeValue} />
          </div>
        </div>
        <div className="range-wrap">
          <div className="col-sm-4">
            <div>
              <p style={{ marginRight: '10px' }}>Изменение сумм оплат:</p>
              <p className="range-value">{inputCostAdj}%</p>
            </div>
          </div>
          <div className="col-sm-8">
            <input type="range" className="form-range" min="-50" value={inputCostAdj} id="2" max="50" onChange={changeValue} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-restore" onClick={clearRange}>Сбросить</button>
      </div>
    </div>
  );
}

export default Range;
