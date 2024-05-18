import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString('bn-BD', {month: 'long'});
  const day = props.date.toLocaleDateString('bn-BD', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;