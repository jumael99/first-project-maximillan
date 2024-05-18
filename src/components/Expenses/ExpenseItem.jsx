import './ExpenseItem.css';
import Card from '../UI/Card.jsx'
import ExpenseDate from './ExpenseDate.jsx'

export default function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}