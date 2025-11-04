import { useEffect, useState } from "react";

const useWeather = () => {
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
    latitude: "",
    longitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather Data....",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weatherData?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching Weather Data Failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data.name,
        climate: data.weatherData[0].main,
        temperature: data.main.temp,
        maxTemperature: data.main.temp_max,
        minTemperature: data.main.temp_min,
        humidity: data.main.humidity,
        cloudPercentage: data.clouds.all,
        wind: data.wind.speed,
        time: data.dt,
        latitude: latitude,
        longitude: longitude,
      };
      setWeatherData(updateWeatherData)
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
  useEffect(() => {
    setLoading({
      loading: true,
      message: "Finding Weather Data...",
    });
    navigator.geolocation.getCurrentPosition((position) =>
      fetchWeatherData(position.coords.latitude, position.coords.longitude)
    );
  }, []);
  return {
    weatherData,
    loading,
    error,
  };
};
export default useWeather;