import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from './components/NewExpense/NewExpense.jsx';
import SelectYear from './components/SelectYear/SelectYear.jsx';
import './App.css'

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
	{
		id: 'e5',
		title: 'Groceries',
		amount: 120.50,
		date: new Date(2019, 3, 15),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const [selectedYear, setSelectedYear] = useState('');

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	const deleteExpenseHandler = (title) => {
		setExpenses((prevExpenses) =>
			prevExpenses.filter((expense) => expense.title !== title)
		);
	};

	const selectYearHandler = (year) => {
		if (year === '') {
			setExpenses(expenses);
		} else {
			setExpenses(expenses.filter((expense) => {
				const expenseYear = new Date(expense.date).getFullYear();
				return expenseYear.toString() === year;
			}));
		}
	};

	return (
		<div className="app-margin">
			<div className="below-app-container">
				<NewExpense onAddExpense={addExpenseHandler}/>
				<SelectYear selectedYear={selectedYear} onSelectYear={selectYearHandler}
							setSelectedYear={setSelectedYear}/>
				<Expenses items={expenses} onDeleteExpense={deleteExpenseHandler}/>
			</div>
		</div>
	);
};

export default App;