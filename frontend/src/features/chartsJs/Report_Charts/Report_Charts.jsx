import Bar_Line_Chart from "../Bar_Line_Chart/Bar_Line_Chart.jsx";
import Doughnut_Chart_Costs from "../Doughnut_Chart/Doughnut_Chart_Costs.jsx";
import { Chart as ChartJS } from "chart.js/auto"
import Doughnut_Chart_Income from "../Doughnut_Chart/Doughnut_Chart_Income.jsx";




function Report_Charts() {


  return (
    
    <>
    <div >
        <Bar_Line_Chart />
        <br />
        <div id="doughnut_charts_style">
          <Doughnut_Chart_Income />
          <br />
          <Doughnut_Chart_Costs />
        </div>
        <br />
        <br />
        <br />
    </div>
      
    </>
    
  );
}

export default Report_Charts;
