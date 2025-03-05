// App.js
import React from 'react';
import Weather
	from './Weather';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					Real-time Weather Forecast App
				</h1>
			</header>
			<main>
				<Weather/>
			</main>
			<footer>
				<p>
					© 2024 Weather App Inc.
					All rights reserved.
				</p>
			</footer>
		</div>
	);
}

export default App;