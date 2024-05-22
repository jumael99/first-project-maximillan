import React, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card";


function Expenses(props) {

  const deleteExpenseHandler = (title) => {
    props.onDeleteExpense(title);
  };

  return (
    <div>
      <Card className='expenses'>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.title}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={deleteExpenseHandler}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;