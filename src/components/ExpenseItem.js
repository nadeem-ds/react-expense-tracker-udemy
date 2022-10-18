import React, { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const title = props.title;
  const amount = props.amount;
  const date = props.date;
  const [titleText, setTitleText] = useState(title);

  const buttonPress = () => {
    setTitleText("New title");
    console.log(titleText);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item">{titleText}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={buttonPress} className="button">Add expense</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
