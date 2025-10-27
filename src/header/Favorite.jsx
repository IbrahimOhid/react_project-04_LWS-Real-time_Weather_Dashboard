import React from "react";
import HeartSvg from '../assets/heart.svg'

const Favorite = () => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={HeartSvg} alt="" />
        <span>Favourite Locations</span>
      </div>
    </div>
  );
};

export default Favorite;
