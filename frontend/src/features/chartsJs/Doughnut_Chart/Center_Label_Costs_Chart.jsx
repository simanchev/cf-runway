import './Center_Label_Style.css';
import { Chart as ChartJS } from "chart.js/auto"




function Center_Label_Costs_Chart({ costChartData }) {


  
  const sumCosts = costChartData.reduce((acc,b) => acc + b.sum , 0);

      



  return (
    
    <>
      <div id='Center_Label'>
        Отток
        <br />
        {`${sumCosts.toLocaleString()} ₽`}
      </div>
    </>
  );
}

export default Center_Label_Costs_Chart;
