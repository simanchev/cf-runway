
// import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import Bar_Chart from "../Bar_Chart/Bar_Chart.jsx";
import Line_Chart from "../Line_Chart/Line_Chart.jsx"
import { Chart as ChartJS } from "chart.js/auto"




function Report_Charts() {


  return (
    
    <>
    <div id="charts_style" >
      <Bar_Chart />
      <br />
      <br />
      <br />
      <Line_Chart />
      <br />
      <br />
      <br />
    </div>
      
    </>
    
  );
}

export default Report_Charts;
