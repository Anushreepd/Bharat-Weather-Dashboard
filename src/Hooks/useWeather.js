import { useEffect, useState } from "react";
import { states } from "../Data/states";

const API_Key = process.env.REACT_APP_WEATHER_API_KEY

export function useWeather(selectState) {
    const [weather,setWeather] = useState(null)
    const [loading,setLoding] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        if (!selectState) return;

        const selected = states.find((state) => state.name === selectState);
        if (!selected) return;

        const fetchweather = async () => {
            try {
                setLoding(true);
                setError(null)

                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${selected.capital}&units=metric&appid=${API_Key}`
                )

                if(!res.ok){
                   throw new Error("Failed to fetch weather");
                }

                const data = await res.json()
                setWeather(data);
            } catch(err) {
                setError(err.message)
            } finally{
                setLoding(false)
            }
        }
        fetchweather();
    },[selectState]
)
 return [weather,loading,error]
}