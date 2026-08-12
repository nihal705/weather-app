import React from 'react'

function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">

      <div className="detail-card">
        <span className="detail-label">Feels Like</span>
        <span className="detail-value">
          {Math.round(weather.main.feels_like)}°C
        </span>
      </div>

      <div className="detail-card">
        <span className="detail-label">Humidity</span>
        <span className="detail-value">
          {weather.main.humidity}%
        </span>
      </div>

      <div className="detail-card">
        <span className="detail-label">Wind Speed</span>
        <span className="detail-value">
          {weather.wind.speed} m/s
        </span>
      </div>

      <div className="detail-card">
        <span className="detail-label">Pressure</span>
        <span className="detail-value">
          {weather.main.pressure} hPa
        </span>
      </div>

    </div>
  );
}

export default WeatherDetails;