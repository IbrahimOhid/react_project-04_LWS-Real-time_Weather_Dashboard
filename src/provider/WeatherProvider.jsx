import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, error } = useContext(useWeather);
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
