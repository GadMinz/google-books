import React from "react";
import search from "../assets/img/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { setFilters, setStartIndex } from "../redux/slices/filterSlice";
import Categories from "./Categories";
import Sort from "./Sort";
import { fetchBooks, removeItems } from "../redux/slices/booksSlice";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, sort, searchValue, startIndex } = useSelector(
    (state) => state.filter
  );
  const [value, setValue] = React.useState("");
  const [categorySearch, setCategorySearch] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("relevance");
  const isMount = React.useRef(false);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      setCategorySearch(params.category);
      setSortBy(params.sort);
      setValue(params.search);
      dispatch(setFilters({ ...params }));
    }
  }, []);

  React.useEffect(() => {
    if (isMount.current) {
      dispatch(fetchBooks({ searchValue, sort, category, startIndex }));
    }
    isMount.current = true;
  }, [category, sort, searchValue]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0 || !value.trim()) {
      return;
    }
    const query = {
      search: value,
      category: categorySearch,
      sort: sortBy,
    };
    const queryString = qs.stringify(query);
    navigate({ pathname: "/search", search: `?${queryString}` });
    if (
      JSON.stringify(query) ===
      JSON.stringify({ search: searchValue, category, sort })
    ) {
      return;
    }
    dispatch(setStartIndex(0));
    dispatch(removeItems());
    dispatch(setFilters({ ...query }));
  };

  return (
    <>
      <form onSubmit={onSearchSubmit} className="search">
        <input
          type="text"
          value={value}
          onChange={(e) => onChangeInput(e)}
          placeholder="Search"
        />
        <img width={28} src={search} alt="search" onClick={onSearchSubmit} />
      </form>
      <div className="search__properties">
        <Categories category={categorySearch} setCategory={setCategorySearch} />
        <Sort sort={sortBy} setSort={setSortBy} />
      </div>
    </>
  );
};

export default Search;
