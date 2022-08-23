import { useState } from "react";
import { Line } from "react-chartjs-2";
import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import './Line_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto"




function Line_Chart() {


    // state for Line_Chart )
    const [lineData,setUserData] = useState({

      labels:UserData.map((data) => data.month),
      datasets: [
        {
        label: "Company income",
        data: UserData.map((data) => data.income),
        backgroundColor: ['green'],
        borderRadius: 15,
        pointStyle: 'triangle', 
        // 'circle'
        // 'cross'
        // 'crossRot'
        // 'dash'
        // 'line'
        // 'rect'
        // 'rectRounded'
        // 'rectRot'
        // 'star'
        // 'triangle'
        radius:9,
      },
    
      {
        label: "Company cost",
        data: UserData.map((data) => data.cost),
        backgroundColor: ['grey'],
        borderRadius: 5,
        radius:7,
      }
    
    ]
    
    });



  return (

    
    
    <>
    <div id="line_style" >
      <Line  data={lineData} /> 
    </div>
    </>
    // options={{animation}}
  );
}

export default Line_Chart;
