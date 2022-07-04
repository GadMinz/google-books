import React from "react";
import search from "../assets/img/search.svg";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/slices/booksSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickSearch = () => {
    dispatch(fetchBooks({ searchValue }));
  };
  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onChangeInput(e)}
        placeholder="Search"
      />
      <img width={28} src={search} alt="search" onClick={onClickSearch} />
    </div>
  );
};

export default Search;
