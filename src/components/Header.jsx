import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <a href="/">
          <h1>Search for books</h1>
        </a>
      </div>
      <Search />
    </div>
  );
};

export default Header;
