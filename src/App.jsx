import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="app">
      <div className="weather-container">

        <h1 className="app-title">Weather App</h1>

        <SearchBar
          setWeather={setWeather}
          setForecast={setForecast}
          setLoading={setLoading}
          setError={setError}
        />

        {loading && <p className="loading">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {weather && (
          <>
            <CurrentWeather weather={weather} />

            <WeatherDetails weather={weather} />

            <Forecast forecast={forecast} />
          </>
        )}

      </div>
    </div>
  );
}

export default App;