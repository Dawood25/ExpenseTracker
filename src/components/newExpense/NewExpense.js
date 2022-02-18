import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../general/Card";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    props.onSaveExpenseData(expenseData);
    cancelExpenseClickHandler();
  };
  const addExpenseClickHandler = () => {
    setAddExpense(true);
  };
  const cancelExpenseClickHandler = () => {
    setAddExpense(false);
  };

  return (
    <Card className="new-expense">
      {!addExpense && (
        <button type="button" onClick={addExpenseClickHandler}>
          Add Expense
        </button>
      )}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseClickHandler}
        />
      )}
    </Card>
  );
};
export default NewExpense;
