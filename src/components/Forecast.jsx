import React from 'react'

function Forecast({ forecast }) {
  return (
    <div className="forecast-section">
      <h2 className="forecast-title">5-Day Forecast</h2>

      <div className="forecast-container">
        {forecast.map((item) => {
          const date = new Date(item.dt_txt);

          return (
            <div className="forecast-card" key={item.dt}>
              <p className="forecast-date">
                {date.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>

              <img
                className="forecast-icon"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />

              <p className="forecast-temperature">
                {Math.round(item.main.temp)}°C
              </p>

              <p className="forecast-description">
                {item.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;