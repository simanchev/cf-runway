/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable camelcase */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Doughnut_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto";

function Doughnut_Chart_Income({ revenueChartData }) {
  const sumIncome = revenueChartData.reduce((acc, b) => acc + b.sum, 0);
  const doughnutDataIncome = {
    labels: revenueChartData.map((data) => data.title),
    datasets: [
      {
        label: "Структура поступлений в последний прогнозный месяц",
        data: revenueChartData.map((data) => data.sum),
        backgroundColor: ['#020122', '#ff521b', '#fc9e4f', '#edd382', '#f2f3ae'],
      }],
    options: {
      esponsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <div id="pie_style">
      <Doughnut data={doughnutDataIncome} options={doughnutDataIncome.options} />
      {sumIncome
        ? (
          <div className="label-text">
            Приток
            <br />
            {`${Math.round((sumIncome / 1000)).toLocaleString()} тыс. ₽`}
          </div>
        ) : ''}
    </div>
  );
}

export default Doughnut_Chart_Income;
