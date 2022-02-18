import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  console.log(props.expensesList);
  if (props.expensesList.length === 0) {
    return (
      <div className="expenses-list__fallback">
        No Expenses are Available for this Year
      </div>
    );
  }
  return (
    <ul className="expenses-list">
      {props.expensesList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
