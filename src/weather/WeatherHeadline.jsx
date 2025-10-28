import React, { useContext } from "react";
import { WeatherContext } from "../context";
import PinSvg from "../assets/pin.svg";
import { getFormattedDate } from "../utils/date-util";
import HazeSvg from "../assets/haze.svg";
import CloudSvg from "../assets/cloud.svg";
import RainSvg from "../assets/rainy.svg";
import SunSvg from "../assets/sun.svg";
import ThunderSvg from "../assets/thunder.svg";
import SnowSvg from "../assets/icons/snow.svg";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { climate, temperature, location, time } = weatherData;
  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return RainSvg;
      case "Clouds":
        return CloudSvg;
      case "Clear":
        return SunSvg;
      case "Snow":
        return SnowSvg;
      case "Thunder":
        return ThunderSvg;
      case "Fog":
        return HazeSvg;
      case "Haze":
        return HazeSvg;
      case "Mist":
        return HazeSvg;

      default:
        return SunSvg;
    }
  };
  return (
    <div>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt="climate" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] leading-none md:mb-4">
              {Math.round(temperature)}°
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={PinSvg} />
              <h2 className="text-2xl lg:text-[24px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {getFormattedDate(time, "time", false)} -{" "}
          {getFormattedDate(time, "date", false)}
        </p>
      </div>
    </div>
  );
};

export default WeatherHeadline;
