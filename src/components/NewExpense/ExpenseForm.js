import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    props.closeForm();
    // alert("Form submitted successfully");

    const expensedData = {
      title: enteredTitle,
      amount: +amount,
      date: new Date(date),
    };
    console.log("Expense data is ", expensedData);
    props.onSaveExpenseData(expensedData);

    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control">Title</label>
          <input
            value={enteredTitle}
            className="new-expense__control"
            type="text"
            onChange={(event) => setEnteredTitle(event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control">Number</label>
          <input
            value={amount}
            className="new-expense__control"
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control">Date</label>
          <input
            value={date}
            className="new-expense__control"
            type="date"
            min="2019-01-01"
            max="2020-12-31"
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.closeForm}>
          Cancel
        </button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
