/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import React from 'react';
import Bar_Line_Chart from '../Bar_Line_Chart/Bar_Line_Chart';
// import Doughnut_Chart_Costs from "../Doughnut_Chart/Doughnut_Chart_Costs.jsx";
// import Doughnut_Chart_Income from "../Doughnut_Chart/Doughnut_Chart_Income.jsx";
import './Report_Charts_Style.css';
// import { Chart as ChartJS } from "chart.js/auto"

function Report_Charts({ chartData }) {
  const { barChartData } = chartData;
  return (
    <div className="chart-div">
      <Bar_Line_Chart barChartData={barChartData} options={{ maintainAspectRatio: false }} />
      <div id="doughnut_charts_style">
        {/* <Doughnut_Chart_Income /> */}
        <br />
        {/* <Doughnut_Chart_Costs /> */}
      </div>
    </div>
  );
}

export default Report_Charts;
