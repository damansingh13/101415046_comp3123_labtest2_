import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState('');

  const apiKey = '2c28b24bddebecc0b037865a91e00fbb'; 

  const fetchWeather = async (city) => {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(weatherUrl);
      setWeather(response.data);
      setWeatherCondition(response.data.weather[0].main.toLowerCase()); 
      setError(null); 
    } catch (err) {
      setWeather(null);
      setError('City not found or API issue');
      setWeatherCondition('');
    }
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather(city); 
    }
  };

  useEffect(() => {
    if (weatherCondition) {
      document.body.classList.remove('clear', 'rain', 'clouds', 'snow'); 
      document.body.classList.add(weatherCondition); 
    }
  }, [weatherCondition]);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error-message">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
          />
        </div>
      )}
    </div>
  );
};

export default App;
