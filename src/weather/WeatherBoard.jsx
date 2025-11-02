import React from "react";
import AddFavorite from "./AddFavorite";
import WeatherHeadline from "./WeatherHeadline";
import WeatherCondition from "./WeatherCondition";

const WeatherBoard = () => {
  return (
    <div>
      <div className="mx-auto px-10 mt-32">
        <div className="flex flex-col items-center justify-center w-11/12 md:max-w-3/4 lg:max-w-1/2 mx-auto rounded-3xl bg-black/20 shadow-2xl p-2 md:p-10 my-5">
          <AddFavorite />
          <div className="flex flex-col md:flex-row justify-around items-start md:items-center md:my-10 w-full p-2 gap-5">
            <WeatherHeadline />
            <WeatherCondition />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBoard;
