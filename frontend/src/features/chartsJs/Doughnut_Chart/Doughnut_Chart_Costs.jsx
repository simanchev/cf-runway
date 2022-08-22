import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import './Doughnut_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto"




function Doughnut_Chart_Costs() {


      // state for Pie_Chart )
      const [doughnutDataCost,setPieData] = useState({

        labels:UserData.map((data) => data.month),
        datasets: [
         
        {
          label: "Company cost",
          data: UserData.map((data) => data.cost),
          backgroundColor: ['red','green','blue','yellow','orange','violet','grey'],
          // borderRadius: 5,
        }
      
      ]
      
      });



  return (
    
    <>
    <div id="pie_style" >
      <Doughnut  data={doughnutDataCost} /> 
    </div>
      
    </>
    
  );
}

export default Doughnut_Chart_Costs;
