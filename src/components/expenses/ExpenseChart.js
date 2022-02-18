import React from "react";
import Chart from "../chart/Chart";

const ExpenseChart = (props) => {
  const dataPoints = [
    {
      label: "jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Sept",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  for(const expense of props.expenses){
    console.log(expense.amount +" is expense");
      dataPoints[expense.date.getMonth()].value+=expense.amount;
  }
  return <Chart dataPoints={dataPoints}/>;

  
};
export default ExpenseChart;
