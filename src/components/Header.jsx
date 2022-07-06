import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItems } from "../redux/slices/booksSlice";
import { setStartIndex } from "../redux/slices/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const onClickTitle = () => {
    dispatch(removeItems());
    dispatch(setStartIndex(0));
  };
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/">
          <h1 onClick={onClickTitle}>Search for books</h1>
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Header;
