// DateSelector.js
import React,
{
	useState
} from 'react';

const Date = ({ onDateChange }) => {
	const [selectedDate, setSelectedDate] = useState('');

	const handleDateChange = (e) => {
		const date = e.target.value;
		setSelectedDate(date);
		onDateChange(date);
	};

	return (
		<div>
			<label htmlFor="date">
				Select Date:
			</label>
			<input type="date" id="date"
				value={selectedDate}
				onChange={handleDateChange} />
		</div>
	);
};

export default Date;