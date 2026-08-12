const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  return data;
};

const FORECAST_URL =
  "https://api.openweathermap.org/data/2.5/forecast";

export const getForecast = async (city) => {
  const response = await fetch(
    `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Forecast not found");
  }

  const data = await response.json();

  return data;
};