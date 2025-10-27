import React from "react";
import TempMaxSvg from '../assets/icons/temp-max.svg'
import TempMinSvg from '../assets/icons/temp-min.svg'
import HumiditySvg from '../assets/icons/humidity.svg';
import CloudySvg from '../assets/icons/cloud.svg'
import WindSvg from '../assets/icons/wind.svg'

const WeatherCondition = () => {
  return (
    <div>
      <div>
        <p className="text-xl font-semibold">
          thunderstorm with light drizzle
        </p>
        <ul className="flex flex-col justify-start gap-2 items-start mt-5 w-full">
          <li className="w-full flex items-center justify-between">
            <span>Temp max</span>
            <div className="flex items-center justify-end gap-2">
              <p>19°</p>
              <img src={TempMaxSvg} alt="temp-max" />
            </div>
          </li>
          <li className="w-full flex items-center justify-between">
            <span>Temp min</span>
            <div className="flex items-center justify-end gap-2">
              <p>19°</p>
              <img src={TempMinSvg} alt="temp-min" />
            </div>
          </li>
          <li className="w-full flex items-center justify-between">
            <span>Humidity</span>
            <div className="flex items-center justify-end gap-2">
              <p>58%</p>
              <img src={HumiditySvg} alt="humidity" />
            </div>
          </li>
          <li className="w-full flex items-center justify-between">
            <span>Cloudy</span>
            <div className="flex items-center justify-end gap-2">
              <p>86%</p>
              <img src={CloudySvg} alt="cloudy" />
            </div>
          </li>
          <li className="w-full flex items-center justify-between">
            <span>Wind</span>
            <div className="flex items-center justify-end gap-2">
              <p>5km/h</p>
              <img src={WindSvg} alt="wind" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCondition;
