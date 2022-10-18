import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formFlag, setFormFlag] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const stopEditing = () => {
    setFormFlag(false);
  };
  return (
    <div className="new-expense">
      {formFlag ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={stopEditing}
        />
      ) : (
        <button onClick={() => setFormFlag(true)}>Add New Expense </button>
      )}
    </div>
  );
};

export default NewExpense;
