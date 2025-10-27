import { useState } from "react";

const UseWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (longitude, latitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather Data",
      });
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }$units=metric`
      );
      if (!res.ok) {
        const errorMessage = `Fetching Weather Data Failed : ${res.status}`;
        throw new Error(errorMessage);
      }
      const data = res.json();
      const updateWeatherData = {
        ...weatherData,
        location: data.name,
        climate: data.weather[0].main,
        temperature: data.main.temp,
        maxTemperature: data.main.temp_max,
        minTemperature: data.main.temp_min,
        humidity: data.main.humidity,
        cloudPercentage: data.clouds.all,
        wind: data.wind.speed,
        time: data.dt,
        longitude: longitude,
        latitude: latitude,
      };
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
};
