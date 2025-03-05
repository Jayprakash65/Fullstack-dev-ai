// WeatherComponents.js
import "./Weather.css"
import React,
{
	useState,
	useEffect
} from 'react';
import axios from 'axios';
import DateSelector from './Date';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather= () => {
	const [city, setCity] = useState('');
	const [selectedDate, setSelectedDate] = useState('');
	const [forecastData, setForecastData] = useState(null);
	const [filteredForecast, setFilteredForecast] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchForecastData = async () => {
			try {
				const response =
					await axios.get(
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=643d6c8f0049d7732aab38687b0f0807&units=metric`
					);
				setForecastData(response.data);
				setError(null);
			} catch (error) {
				setError(
					`Error fetching weather 
					data. Please try again.`
				);
				setForecastData(null);
			}
		};

		if (city) {
			fetchForecastData();
		}
	}, [city]);

	useEffect(() => {
		if (forecastData && selectedDate) {
			const filteredData =
				forecastData.list.filter(
					forecast =>
						forecast.dt_txt.includes(selectedDate)
				);
			setFilteredForecast(filteredData);
		}
	}, [forecastData, selectedDate]);

	const handleCityChange = (e) => {
		setCity(e.target.value);
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<div className="weather-forecast-app container mt-4">
			<h1> Forecastifly</h1>
			<center className="form-group">
				<label htmlFor="city">
					Enter City:
				</label>
				<input type="text" className="form-control"
					id="city" value={city}
					onChange={handleCityChange} />
			</center>
			<DateSelector onDateChange={handleDateChange} />
			{error && <p>{error}</p>}
			{
				filteredForecast.length > 0 && (
					<div className="row forecast-container">
						{filteredForecast.map((forecast, index) => (
							<div key={index} className="col-md-3">
								<div className="card mb-3">
									<div className="card-body">
										<h5 className="card-title">
											Date: {forecast.dt_txt}
										</h5>
										<p className="card-text">
											Temperature:
											{forecast.main.temp} °C
										</p>
										<p className="card-text">
											Weather:
											{forecast.weather[0].description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
		</div>
	);
};

export default Weather;