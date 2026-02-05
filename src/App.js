import { useState } from "react";
import StateSelector from "./Component/StateSelector";
import "./App.css";
import { useWeather } from "./Hooks/useWeather";

function App() {
  const [selectState, setSlectedState] = useState("");
  const [weather, loading, error] = useWeather(selectState);

  const handleChange = (e) => {
    setSlectedState(e.target.value);
  };
  return (
    <div className="app">
      <div className="dashboard-container">
      <h1>Bharat Weather Dashboard</h1>

      <StateSelector
        selectState={selectState}
        onChange={handleChange}
      ></StateSelector>
      {loading && <p>Loading weather...</p>}
      {error && <p>{error}</p>}

      {weather && !loading && (
        <div className="weather-card">
          <h2>{selectState}</h2>
          <p>Capital: {weather.name}</p>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>Temperature: {weather.main.temp}°C</p>
          <p>
            Condition:{" "}
            {weather?.weather?.[0]?.description &&
              weather.weather[0].description[0].toUpperCase() +
                weather.weather[0].description.slice(1)}
          </p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} km/h</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
