import React from "react";
import search from "../assets/img/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slices/booksSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  const { category, sort } = useSelector((state) => state.filter);

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  const orderBy = sort !== "relevance" ? `&orderBy=${sort}` : "";
  const subject = category !== "all" ? `+subject:${category}` : "";
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length === 0 || !searchValue.trim()) {
      alert("Empty request");
      return;
    }
    dispatch(fetchBooks({ searchValue, orderBy, subject }));
  };

  return (
    <form onSubmit={onSearchSubmit} className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onChangeInput(e)}
        placeholder="Search"
      />
      <img width={28} src={search} alt="search" onClick={onSearchSubmit} />
    </form>
  );
};

export default Search;
