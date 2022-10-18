import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const expenses = props.expenses;
  const dropDownChangeHandler = (selectedYear) => {
    // console.log("expense js ", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredYearExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // console.log("-------filtereYEarArrat-------------", filteredYearExpense);

  // console.log("-----------expense", props.expenses);
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={dropDownChangeHandler}
        />
        <ExpensesChart expenses={filteredYearExpense} />
        <ExpenseList filteredYearExpense={filteredYearExpense} />
      </div>
    </div>
  );
};

export default Expenses;
