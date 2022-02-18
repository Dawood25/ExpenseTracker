import "./Expenses.css";
import Card from "../general/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
   
  const [year, setYear] = useState("2021");
  const filteredExpenseList=props.expense.filter(el=>el.date.getFullYear().toString()===year);

  const onYearChangeHandler = (year) => {
    setYear(year);
    //let filteredExpense=props.expense.filter(el=>el.date.getFullYear()==year);
    //setExpenses(filteredExpense);
    console.log("from parent " + year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={year} onYearChange={onYearChangeHandler} />
        <ExpenseChart expenses={filteredExpenseList} />
        <ExpensesList expensesList={filteredExpenseList} />
      </Card>
    </div>
  );
};
export default Expenses;
