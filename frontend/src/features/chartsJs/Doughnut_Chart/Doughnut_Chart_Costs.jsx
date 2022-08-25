/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable camelcase */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Doughnut_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto";

function Doughnut_Chart_Costs({ costChartData }) {
  const sumCost = costChartData.reduce((acc, b) => acc + b.sum, 0);
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
    <div id="pie_style">
      <Doughnut data={doughnutDataCost} options={doughnutDataCost.options} />
      {sumCost
        ? (
          <div className="label-text">
            Отток
            <br />
            {`${Math.round((sumCost / 1000)).toLocaleString()} тыс. ₽`}
          </div>
        ) : ''}
    </div>
  );
}

export default Doughnut_Chart_Costs;
