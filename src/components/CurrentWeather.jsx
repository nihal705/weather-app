import React from 'react'

function CurrentWeather({ weather }) {
  return (
    <div className="current-weather">
      <h2 className="city-name">{weather.name}</h2>

      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <h1 className="temperature">
        {Math.round(weather.main.temp)}°C
      </h1>

      <p className="weather-description">
        {weather.weather[0].description}
      </p>
    </div>
  );
}

export default CurrentWeather;