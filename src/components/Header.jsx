import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {removeItems} from "../redux/slices/booksSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/">
          <h1 onClick={() => dispatch(removeItems())}>Search for books</h1>
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Header;
