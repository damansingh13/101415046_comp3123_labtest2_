# Weather App

## Description
A simple weather app built with ReactJS that fetches real-time weather data from the OpenWeatherMap API. Users can search for the current weather of any city by entering the city name.

## Features
- Dynamic search by city name
- Displays temperature, weather conditions, humidity, wind speed, and weather icon
- API integration with OpenWeatherMap
- Dynamic background change based on weather conditions (sunny, rainy, cloudy, snowy)
  
## API Used
- **OpenWeatherMap API**: [https://openweathermap.org/api](https://openweathermap.org/api)
- **API Key**: Replace with your own key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
2. Navigate into the project directory:
cd weather-app
3. Install the dependencies:
npm install
4. Create an .env file in the root directory and add your OpenWeatherMap API key:
REACT_APP_API_KEY=your_api_key_here
5. Run the app:
npm start

6. Open the app in your browser by visiting: http://localhost:3000

How to Use
--Enter the name of any city in the search box.
--Click on the Search button to fetch the weather data for that city.
--The app will display the current temperature, weather condition, humidity, wind speed, and a corresponding weather icon.
--The background will change based on the weather condition (e.g., clear sky, rain, snow, etc.).