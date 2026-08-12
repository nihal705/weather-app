# 🌤️ Weather App

A responsive weather application built with React that allows users to search for a city and view its current weather conditions along with a 5-day forecast.

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 🌤️ Display current weather condition and weather icon
- 💧 Show humidity
- 🌡️ Show "Feels Like" temperature
- 💨 Show wind speed
- 📊 Show atmospheric pressure
- 📅 5-day weather forecast
- 📱 Responsive design for desktop, tablet, and mobile
- ⚠️ Loading and error handling
- 🎨 Glassmorphism-style UI

## 🛠️ Technologies Used

- React
- JavaScript
- CSS
- OpenWeather API
- Vite

## 📁 Project Structure

```text
weather-app/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherDetails.jsx
│   │
│   ├── services/
│   │   └── weatherApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

⚙️ Getting Started
1. Clone the repository
git clone https://github.com/your-username/weather-app.git

2. Navigate to the project
cd weather-app

3. Install dependencies
npm install

4. Create an API key
- This project uses the OpenWeather API.
- Create an account on OpenWeather and generate an API key.
- Create a .env file in the project root:
- VITE_WEATHER_API_KEY=your_api_key_here

- This project uses the OpenWeather API to retrieve:
- Current weather data
- 5-day / 3-hour forecast data

5. Start the development server
npm run dev



The API key is stored in an environment variable for security.

## What I Learned

### While building this project, I practiced:

- React component-based architecture
- Passing data using props
- Managing state with useState
- Handling user input
- Making API requests
- Working with asynchronous JavaScript
- Handling loading and error states
- Rendering lists using map()
- Responsive CSS
- CSS Grid and Flexbox
- Working with external APIs

## 👨‍💻 Author
G Nihal 