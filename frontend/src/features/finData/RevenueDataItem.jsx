import React from 'react';

function RevenueDataItem() {
  return (
    <tr>
      <td style={{ textAlign: 'left', width: '30%' }}>Продажа косметики</td>
      <td>{Number(100000).toLocaleString()}</td>
      <td>
        <input className="form-check-input flex-check check-black" name="regular" type="checkbox" disabled />
      </td>
      <td>10.2022</td>
      <td>03.2023</td>
      <td style={{ width: '1%' }}>
        <button type="button" className="btn btn-edit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default RevenueDataItem;
