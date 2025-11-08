import { useContext } from "react";
import PinSvg from "../assets/pin.svg";
import { WeatherContext } from "../context/weatherContext";
import { getFormattedData } from "../utils/data-util";
import CloudIcon from "../assets/cloud.svg";
import HazeIcon from "../assets/haze.svg";
import SnowIcon from "../assets/icons/snow.svg";
import SunnyIcon from "../assets/icons/sunny.svg";
import RainIcon from "../assets/rainy.svg";
import ThunderIcon from "../assets/thunder.svg";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { climate, temperature, location, time } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
      case "Haze":
      case "Mist":
        return HazeIcon;
      default:
        return SunnyIcon;
    }
  };

  return (
    <div>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt="climate" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4 text-blue-900">
              {Math.round(temperature)}°
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={PinSvg} alt="location pin" />
              <h2 className="text-xl lg:text-[40px] text-amber-700">
                {location}
              </h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {getFormattedData(time, "time", false)}
          {getFormattedData(time, "date", false)}
        </p>
      </div>
    </div>
  );
};

export default WeatherHeadline;
