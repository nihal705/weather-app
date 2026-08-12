import { useState } from "react";
import { getWeather, getForecast } from "../services/weatherApi";

function SearchBar({ setWeather, setLoading, setError, setForecast }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);
      const forecastData = await getForecast(city);

      const dailyForecast = [];

      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];

        const alreadyExists = dailyForecast.some(
          (forecast) => forecast.dt_txt.split(" ")[0] === date,
        );

        if (!alreadyExists) {
          dailyForecast.push(item);
        }
      });

      setWeather(data);
      setForecast(dailyForecast.slice(0, 5));
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-section">
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
