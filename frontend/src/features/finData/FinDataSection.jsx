import React from 'react';
import RevenueDataList from './RevenueDataList';

function RevenueDataSection() {
  return (
    <div className="fin-data-section">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="revenue-tab" data-bs-toggle="tab" data-bs-target="#revenue-tab-pane" type="button" role="tab" aria-controls="revenue-tab-pane" aria-selected="true">Поступления от продаж</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="cost-tab" data-bs-toggle="tab" data-bs-target="#cost-tab-pane" type="button" role="tab" aria-controls="cost-tab-pane" aria-selected="false">Оплата товаров и услуг</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="investment-tab" data-bs-toggle="tab" data-bs-target="#investment-tab-pane" type="button" role="tab" aria-controls="investment-tab-pane" aria-selected="false">Инвестиции</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="financing-tab" data-bs-toggle="tab" data-bs-target="#financing-tab-pane" type="button" role="tab" aria-controls="financing-tab-pane" aria-selected="false">Финансирование</button>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active fin-data-wrap" id="revenue-tab-pane" role="tabpanel" aria-labelledby="revenue-tab" tabIndex="0"><RevenueDataList /></div>
        <div className="tab-pane fade" id="cost-tab-pane" role="tabpanel" aria-labelledby="cost-tab" tabIndex="0">...</div>
        <div className="tab-pane fade" id="investment-tab-pane" role="tabpanel" aria-labelledby="investment-tab" tabIndex="0">...</div>
        <div className="tab-pane fade" id="financing-tab-pane" role="tabpanel" aria-labelledby="financing-tab" tabIndex="0">...</div>
      </div>
    </div>
  );
}

export default RevenueDataSection;
