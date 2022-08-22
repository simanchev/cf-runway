import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import '../Bar_Line_Chart/Bar_Line_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto"





function Bar_Line_Chart() {

  // state for Bar_Chart )
  const [barlineData,setUserData] = useState({

    labels:UserData.map((data) => data.month),
    datasets: [
      {
      type: 'bar',
      label: "Company Price in $",
      yAxisId:'dollars',
      data: UserData.map((data) => data.companyPrice),
      backgroundColor: ['orange'],
      borderRadius: 25,
      order: 2, // уровень на котором находится график дальше-глубже 1-передний план
    },
  
    // {
    //   type: 'bar',
    //   label: "Company cost",
    //   data: UserData.map((data) => data.cost),
    //   backgroundColor: ['grey'],
    //   borderRadius: 5,
    //   order: 2,
    // },

    // {
    //   type: 'line',
    //   label: "Company income",
    //   data: UserData.map((data) => data.income),
    //   backgroundColor: ['green'],
    //   borderRadius: 15,
    //   pointStyle: 'triangle',
    //   order: 1,
    // },

    {
      type: 'line',
      label: "Cash Flow",
      yAxisID:'volume',
      data: UserData.map((data) => data.cashFlow),
      backgroundColor: ['blue'],
      pointStyle: 'circle',
      radius: 9,
      order: 1,
    },
  
  ],

 


  options:{
    scales: {
     
      dollars: { // айдишник yAxisID в лайне это ключ в настройках
        beginAtZero: true,
        type: 'linear',
        position: 'left',
      },

      volume: {  // айдишник yAxisID в лайне это ключ в настройках
        beginAtZero: true,
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
      
    }
  }
 
}

);

  
  return (
    
    <>
      <div id="bar_line_style" >
        <Bar data={barlineData} options={barlineData.options} />
      </div>
    </>
    
  );
}

export default Bar_Line_Chart;
