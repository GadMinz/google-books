import React from "react";
import search from "../assets/img/search.svg";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <img width={28} src={search} alt="search" />
    </div>
  );
};

export default Search;
