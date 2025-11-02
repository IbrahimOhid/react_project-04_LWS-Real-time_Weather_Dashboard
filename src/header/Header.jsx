import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="mx-auto px-10 flex items-center justify-between py-6">
        <Logo />
        <Search />
        <div className="flex items-center gap-4 relative">
          <Favorite />
          <FavoriteListModal />
        </div>
      </nav>
    </header>
  );
};

export default Header;
