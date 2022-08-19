import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import './Pie_Chart_Style.css';
import { Chart as ChartJS } from "chart.js/auto"




function Pie_Chart_Income() {


      // state for Pie_Chart )
      const [pieDataIncome,setPieData] = useState({

        labels:UserData.map((data) => data.month),
        datasets: [
          {
          label: "Company income",
          data: UserData.map((data) => data.income),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
          // borderRadius: 15,
          borderWidth: 5,
         
        },
      
      
      ]
      
      });



  return (
    
    <>
    <div id="pie_style" >
      <Pie  data={pieDataIncome} /> 
    </div>
      
    </>
    // options={{animation}}
  );
}

export default Pie_Chart_Income;
