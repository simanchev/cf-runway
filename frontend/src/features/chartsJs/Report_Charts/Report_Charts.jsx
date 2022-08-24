/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import React from 'react';
import Bar_Line_Chart from '../Bar_Line_Chart/Bar_Line_Chart';
import Doughnut_Chart_Costs from '../Doughnut_Chart/Doughnut_Chart_Costs';
import Doughnut_Chart_Income from '../Doughnut_Chart/Doughnut_Chart_Income';
import './Report_Charts_Style.css';
// import '../Bar_Line_Chart/Bar_Line_Chart_Style.css';
// import { Chart as ChartJS } from "chart.js/auto"

function Report_Charts({ chartData }) {
  const { barChartData, revenueChartData, costChartData } = chartData;
  return (
    <div className="chart-div">
      <Bar_Line_Chart barChartData={barChartData} />
      <div className="doughnut_charts_style">
        <Doughnut_Chart_Income revenueChartData={revenueChartData} />
        <Doughnut_Chart_Costs costChartData={costChartData} />
      </div>
    </div>
  );
}

export default Report_Charts;
