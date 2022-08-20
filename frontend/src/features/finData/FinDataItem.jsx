import React from 'react';
import { useDispatch } from 'react-redux';
import actionType from '../store/actions';

function RevenueDataItem({ data }) {
  const modals = {
    1: 'modalRevenueItem',
    2: 'modalCostItem',
    3: 'modalInvestmentItem',
    4: 'modalFinancingItem',
  };

  const startDate = `${data.start_date.slice(5)}.${data.start_date.slice(0, 4)}`;
  const endDate = `${data.end_date.slice(5)}.${data.end_date.slice(0, 4)}`;
  const dispatch = useDispatch();

  function loadModal() {
    dispatch({ type: actionType.SELECT_FIN_DATA, payload: data });
  }

  return (
    <tr>
      <td style={{ textAlign: 'left', width: '30%' }}>{data.title}</td>
      <td>{Number(data.sum).toLocaleString()}</td>
      <td>
        <input className="form-check-input flex-check check-black" name="regular" type="checkbox" checked={data.regular} disabled />
      </td>
      <td>{startDate}</td>
      <td>{endDate !== '.' ? endDate : '-'}</td>
      <td style={{ width: '1%' }}>
        <button type="button" onClick={loadModal} className="btn btn-edit" data-bs-toggle="modal" data-bs-target={`#${modals[data.fin_types_id]}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default RevenueDataItem;
