import React, { useState } from 'react'

const FavoriteProvider = ({children}) => {
  const [favorite, setFavorite] = useState('favorite', []);
  const addToFavorite = (latitude, longitude, location)=>{
    setFavorite({
      ...favorite,
      latitude,
      longitude,
      location
    })
  }
  const removeFromFavorite = (location)=>{
    const restFavorite = favorite.filter((fav)=> fav.location !== location)
    setFavorite(restFavorite)
  }
  return (
    <FavoriteProvider value={{favorite, addToFavorite, removeFromFavorite}}>
      {children}
    </FavoriteProvider>
  )
}

export default FavoriteProvider
