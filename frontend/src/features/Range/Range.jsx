import React, { useState } from 'react';

function Range() {
  const [inp, setINp] = useState(0);
  const [rangeValue, setRangeValue] = useState('1');
  function inputChange(e) {
  // console.log(e.target.value);
    setINp(e.target.value);
  }
  function clearRange(e) {
    e.preventDefault();
    setINp(0);
  }
  function selectValue(e) {
    if (e) {
    setRangeValue(e.target.value);
    }
    console.log(rangeValue);
  }

  return (
    <>
      <select onChange={selectValue} className="form-select form-select-sm" aria-label=".form-select-sm example">
        <option value="1">Revenue</option>
        <option value="2">Cost</option>
      </select>
      <div>{rangeValue === '1' ? (
        <><label htmlFor="customRange1" className="form-label">{inp} Первый</label>
          <input type="range" className="form-range" defaultlValue="0" min="-50" max="50" value={inp} onChange={inputChange} id="customRange1" />
        </>
) : (
  <><label htmlFor="customRange1" className="form-label">{inp} второй</label>
    <input type="range" className="form-range" defaultlValue="0" min="-50" max="50" value={inp} onChange={inputChange} id="customRange1" />
  </>
)}

      </div>
      <button type="button" onClick={clearRange}>Очистить</button>
    </>
  );
}

export default Range;
