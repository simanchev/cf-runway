/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './Bar_Line_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto";

function Bar_Line_Chart({ barChartData }) {
  const barlineData = {
    labels: barChartData.map((data) => data.month),
    datasets: [
      {
        type: 'bar',
        label: 'Накопленный денежный поток, ₽',
        yAxisID: 'par1',
        data: barChartData.map((data) => data.cumulativeSum),
        backgroundColor: ['lightblue'],
        borderRadius: 3,
        order: 2, // уровень на котором находится график дальше-глубже 1-передний план
      },
      {
        type: 'line',
        label: 'Денежный поток в месяц, ₽',
        yAxisID: 'par2',
        data: barChartData.map((data) => data.sum),
        backgroundColor: ['darkblue'],
        pointStyle: 'circle',
        radius: 4,
        order: 1,
      },
    ],
    options: {
      scales: {
        par1: { // айдишник yAxisID в лайне это ключ в настройках
          beginAtZero: true,
          type: 'linear',
          position: 'left',
        },
        par2: { // айдишник yAxisID в лайне это ключ в настройках
          beginAtZero: true,
          type: 'linear',
          position: 'right',
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    },
  };

  return (
    <div id="bar_line_style">
      <Bar data={barlineData} options={barlineData.options} />
    </div>
  );
}

export default Bar_Line_Chart;
