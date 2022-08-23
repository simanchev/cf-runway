/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable camelcase */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Doughnut_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto";
import Center_Label_Income_Chart from './Center_Label_Income_Chart';

function Doughnut_Chart_Income({ revenueChartData }) {
  const doughnutDataIncome = {
    labels: revenueChartData.map((data) => data.title),
    datasets: [
      {
        label: "Структура поступлений в последний прогнозный месяц",
        data: revenueChartData.map((data) => data.sum),
        backgroundColor: ['#020122', '#ff521b', '#fc9e4f', '#edd382', '#f2f3ae'],
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
      <Doughnut data={doughnutDataIncome} options={doughnutDataIncome.options} />
      <Center_Label_Income_Chart revenueChartData={revenueChartData} />
    </div>
    
  );
}

export default Doughnut_Chart_Income;
