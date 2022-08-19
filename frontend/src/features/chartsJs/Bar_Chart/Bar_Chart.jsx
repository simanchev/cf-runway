import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import './Bar_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto"




function Bar_Chart() {

  // state for Bar_Chart )
  const [barData,setUserData] = useState({

    labels:UserData.map((data) => data.month),
    datasets: [
      {
      label: "Company income",
      data: UserData.map((data) => data.income),
      backgroundColor: ['orange'],
      borderRadius: 15,
    },
  
    {
      label: "Company cost",
      data: UserData.map((data) => data.cost),
      backgroundColor: ['grey'],
      borderRadius: 5,
    }
  
  ]
  
  });
  
  return (
    
    <>
    <div id="bar_style" >
      <Bar  data={barData} /> 
    </div>
      
    </>
    // options={{animation}}
  );
}

export default Bar_Chart;
