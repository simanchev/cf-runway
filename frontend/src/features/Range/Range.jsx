import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Range() {
  const dispatch = useDispatch();
  // const [inp, setINp] = useState(0);
  // const inputManipulate = useSelector(())
  const [rangeValue, setRangeValue] = useState('1');
  // let revenueAdj;
  // let costAdj;
  function inputRevenue(e) {
    if (e.target.id === '1') {
      dispatch({ type: 'revenue', payload: e.target.value });
}
if (e.target.id === '2') {
  dispatch({ type: 'cost', payload: e.target.value });
}
  }

  // function clearRange(e) {
  //   e.preventDefault();
  //   // setINp(0);
  // }
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
          <input type="range" className="form-range" defaultlValue="0" min="-50" id="1" max="50" onChange={inputRevenue} />
        </>
) : (
  <><label htmlFor="customRange1" className="form-label"> Cost</label>
    <input type="range" className="form-range" defaultlValue="0" min="-50" max="50" id="2" onChange={inputRevenue} />
  </>
)}

      </div>
      <button type="button">Очистить</button>
    </>
  );
}
// onClick={clearRange}

export default Range;
