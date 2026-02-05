import { useEffect, useState } from "react";
import StateSelector from "./Component/StateSelector";
import "./App.css";
import { useWeather } from "./Hooks/useWeather";
import Footer from "./Component/Footer/Footer";
import CitySelector from "./Component/CitySelector";
import { getCities, getStates } from "./API/loctionAPI";

function App() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectState, setSlectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [weather, loading, error] = useWeather(selectedCity);

  useEffect(() => {
    getStates().then(setStates);
  }, []);

  useEffect(() => {
  if (!selectState) return;

  getCities(selectState).then((data) => {
    console.log("CITIES FROM API:", data);
    setCities(data);
  });
}, [selectState]);

const selectedStateName =
  states.find((s) => s.iso2 === selectState)?.name;


  return (
    <div className="app">
      <div className="dashboard-container">
      <h1>Bharat Weather Dashboard</h1>

      <StateSelector
          states={states}
          selectedState={selectState}
          onChange={(e) => {
            setSlectedState(e.target.value);
            setSelectedCity("");
            setCities([]);
          }}
        />

      {cities.length > 0 && (
          <CitySelector
            cities={cities}
            selectedCity={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        )}
      {loading && <p>Loading weather...</p>}
      {error && <p>{error}</p>}

      {weather && !loading && (
        <div className="weather-card">
          <h2>{selectedStateName}</h2>
          <p>City: {weather.name}</p>
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
      <Footer />
    </div>
    </div>
  );
}

export default App;
