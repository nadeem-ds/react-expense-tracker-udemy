import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ filteredYearExpense }) => {
  return (
    <div>
      {filteredYearExpense.length === 0 ? (
        <h2>Don't have any expense in this year</h2>
      ) : (
        filteredYearExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
