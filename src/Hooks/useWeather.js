import { useEffect, useState } from "react";

const API_Key = process.env.REACT_APP_WEATHER_API_KEY;

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {
      setWeather(null);
      return;
    }

    const fetchweather = async () => {
      try {
        setLoding(true);
        setError(null);

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`,
        );
        console.log("res", res);

        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoding(false);
      }
    };
    fetchweather();
  }, [city]);
  return [weather, loading, error];
}
