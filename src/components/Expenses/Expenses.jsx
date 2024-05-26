import React from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card";

function Expenses(props) {
	const deleteExpenseHandler = (title) => {
		props.onDeleteExpense(title);
	};

	return (
		<div>
			<Card className='expenses'>
				{props.items.length === 0 ? (
					<p>No expenses found for the selected year.</p>
				) : (
					props.items.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
							onDelete={deleteExpenseHandler}
						/>
					))
				)}
			</Card>
		</div>
	);
}

export default Expenses;