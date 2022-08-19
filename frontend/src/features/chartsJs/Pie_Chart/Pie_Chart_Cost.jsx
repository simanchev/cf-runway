import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import './Pie_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto"




function Pie_Chart_Cost() {


      // state for Pie_Chart )
      const [pieDataCost,setPieData] = useState({

        labels:UserData.map((data) => data.month),
        datasets: [
         
        {
          label: "Company cost",
          data: UserData.map((data) => data.cost),
          backgroundColor: ['yellow'],
          // borderRadius: 5,
        }
      
      ]
      
      });



  return (
    
    <>
    <div id="pie_style" >
      <Pie  data={pieDataCost} /> 
    </div>
      
    </>
    // options={{animation}}
  );
}

export default Pie_Chart_Cost;
