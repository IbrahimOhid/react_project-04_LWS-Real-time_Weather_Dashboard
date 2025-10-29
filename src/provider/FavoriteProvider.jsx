import React from "react";
import { FavoriteContext } from "../context";
import { UseLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = UseLocalStorage("favorite", []);
  const addToFavorite = (latitude, longitude, location) => {
    setFavorite([
      ...favorite,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  };
  const removeFromFavorite = (location) => {
    const restFavorite = favorite.filter((fav) => fav.location !== location);
    setFavorite(restFavorite);
  };
  return (
    <FavoriteContext.Provider
      value={{ addToFavorite, removeFromFavorite, favorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
