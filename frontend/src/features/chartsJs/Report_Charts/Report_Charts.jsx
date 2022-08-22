
// import { UserData } from '../../../data.js'; // подрубаем наши данные из файла дата жс
import Line_Chart from "../Line_Chart/Line_Chart.jsx";
import Bar_Line_Chart from "../Bar_Line_Chart/Bar_Line_Chart.jsx";
import { Chart as ChartJS } from "chart.js/auto"





function Report_Charts() {


  return (
    
    <>
    <div id="charts_style" >
      <Bar_Line_Chart />
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
