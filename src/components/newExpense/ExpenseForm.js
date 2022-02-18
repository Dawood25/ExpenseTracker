import { React, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  //instead of using three seprate state we can have one single state which will store complete obect like this :-
  //const[ userInput,setUserInput]=useState({title:'',date:'',amount:''});
  //and to set values we need to copy other two in new setObject react simple replace old state with new state it won;t merge the two state together
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
    //setUserInput({...userInput,title:event.target.value});
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setDate(event.target.value);
    //setUserInput({...userInput,date:event.target.value});
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
    //setUserInput({...userInput,amount:event.target.value});
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      date: new Date(date),
      amount: amount,
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
