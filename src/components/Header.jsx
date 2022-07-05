import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import Sort from "./Sort";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/">
          <h1>Search for books</h1>
        </Link>
      </div>
      <Search />
      <div className="search__properties">
        <Categories />
        <Sort />
      </div>
    </div>
  );
};

export default Header;
