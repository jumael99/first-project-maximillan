import React from 'react';
import './SelectYear.css';

export default function SelectYear({selectedYear, setSelectedYear, onSelectYear}) {
	const yearChangeHandler = (event) => {
		const year = event.target.value;
		setSelectedYear(year);
		onSelectYear(year); // Pass the selected year to the handler
	};

	return (
		<div>

			<div className="container">
				<p>Pick a Year:</p>
				<select value={selectedYear} onChange={yearChangeHandler}>
					<option value=''>All</option>
					<option value='2019'>2019</option>
					<option value='2020'>2020</option>
					<option value='2021'>2021</option>
					<option value='2022'>2022</option>
				</select>
			</div>
		</div>
	);
}