/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable camelcase */
import React from 'react';
import { Chart as ChartJS } from "chart.js/auto";

function Center_Label_Income_Chart({ revenueChartData }) {
  const sumIncome = revenueChartData.reduce((acc, b) => acc + b.sum, 0);
  return (
    <div id="Center_Label">
      <div>
        Приток
        <br />
        {`${(sumIncome / 1000).toLocaleString()} тыс. руб`}
      </div>
    </div>
  );
}

export default Center_Label_Income_Chart;
