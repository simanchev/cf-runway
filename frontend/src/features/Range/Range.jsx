import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Range() {
  const dispatch = useDispatch();
  // const [inp, setINp] = useState(0);
  const inputRevenueAdj = useSelector((st) => st.projects.revenueAdj);
  const inputCostAdj = useSelector((st) => st.projects.costAdj);
  const [rangeValue, setRangeValue] = useState('1');
  // console.log(inputRevenueAdj, 'global state');
  function inputRevenue(e) {
    if (e.target.id === '1') {
      dispatch({ type: 'REVENUE', payload: e.target.value });
}
if (e.target.id === '2') {
  dispatch({ type: 'COST', payload: e.target.value });
}
  }

  function clearRange(e) {
    e.preventDefault();
    dispatch({ type: 'REVENUE', payload: 0 });
    dispatch({ type: 'COST', payload: 0 });
  }
  function selectValue(e) {
    if (e) {
    setRangeValue(e.target.value);
    }
  }

  return (
    <>
      <select onChange={selectValue} className="form-select form-select-sm" aria-label=".form-select-sm example">
        <option value="1">Revenue</option>
        <option value="2">Cost</option>
      </select>
      <div>{rangeValue === '1' ? (
        <><label htmlFor="customRange1" className="form-label">Revenue</label>
          <input type="range" className="form-range" min="-50" value={inputRevenueAdj} id="1" max="50" onChange={inputRevenue} />
        </>
) : (
  <><label htmlFor="customRange1" className="form-label"> Cost</label>
    <input type="range" className="form-range" min="-50" value={inputCostAdj} max="50" id="2" onChange={inputRevenue} />
  </>
)}

      </div>
      <button onClick={clearRange} type="button">Очистить</button>
    </>
  );
}
// onClick={clearRange}

export default Range;
