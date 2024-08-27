import React, { useState } from "react";
import "./Weather.css"; // Assuming you name your CSS file Weather.css

const api = {
  key: "be5952de9b93b1acb82583117fe55a79",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const response = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
        // Handle error (e.g., display a message to the user)
      }
    }
  };

  return (
    <div className="weather-container">
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {weather.main && (
        <div className="weather-info">
          <h1>{weather.name}</h1>
          <div className="temperature">{Math.round(weather.main.temp)}°C</div>
          <div className="weather-description">{weather.weather[0].description}</div>
        </div>
      )}
    </div>
  );
}

export default Weather;
