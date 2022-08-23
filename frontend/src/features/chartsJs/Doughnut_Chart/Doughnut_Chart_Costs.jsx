/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable camelcase */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Doughnut_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto";
import Center_Label_Costs_Chart from './Center_Label_Costs_Chart';

function Doughnut_Chart_Costs({ costChartData }) {
  const doughnutDataCost = {
    labels: costChartData.map((data) => data.title),
    datasets: [
      {
        label: "Структура оплат в последний прогнозный месяц",
        data: costChartData.map((data) => data.sum),
        backgroundColor: ['#030f13', '#073C4E', '#346073', '#5C879B', '#84AFC5', '#AEDAF0'],
      }],
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <div id="pie_style" >
      <Doughnut data={doughnutDataCost} options={doughnutDataCost.options} />
      <Center_Label_Costs_Chart costChartData={costChartData} />
    </div>
    
  );
}

export default Doughnut_Chart_Costs;
