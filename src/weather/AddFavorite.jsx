import React, { useContext, useEffect, useState } from "react";
import HeartSvg from "../assets/heart.svg";
import RedHeartSvg from "../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../context";

const AddFavorite = () => {
  const { addToFavorite, removeFromFavorite, favorite } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavorite, toggleFavorite] = useState(false);
  const { latitude, longitude, location } = weatherData;
  useEffect(()=>{
    const found = favorite.find((fav) => fav.location === location);
    toggleFavorite(found)
  })
  const handleFavorite = () => {
    toggleFavorite(!isFavorite);
    const found = favorite.find((fav) => fav.location === location);
    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFromFavorite(location);
    }
  };
  return (
    <div>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={handleFavorite}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer"
          >
            <span>Add to Favourite</span>
            <img src={isFavorite ? RedHeartSvg : HeartSvg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFavorite;
