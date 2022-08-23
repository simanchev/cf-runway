// import './Center_Label_Style.css';
import { Chart as ChartJS } from "chart.js/auto"




function Center_Label_Income_Chart({ revenueChartData }) {


  
  const sumIncome = revenueChartData.reduce((acc,b) => acc + b.sum , 0);

      



  return (
    
    <>
      <div id='Center_Label'>
        Поступления:
        <br />
        {`${sumIncome.toLocaleString()} ₽`}
      </div>
    </>
  );
}

export default Center_Label_Income_Chart;
