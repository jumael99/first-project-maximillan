import './ExpenseItem.css';
import Card from '../UI/Card.jsx'
import ExpenseDate from './ExpenseDate.jsx'
import React, {useState} from 'react'
import propTypes from 'prop-types'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (<Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
  </Card>);
}

ExpenseItem.propTypes = {
  title: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
  date: propTypes.instanceOf(Date).isRequired
}

export default ExpenseItem;