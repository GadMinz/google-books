import React from "react";
import search from "../assets/img/search.svg";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { setFilters } from "../redux/slices/filterSlice";
import Categories from "./Categories";
import Sort from "./Sort";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { category, sort, searchValue } = useSelector((state) => state.filter);
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [sort, setSort] = React.useState("relevance");

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters({ ...params }));
    }
  }, []);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const query = {
      search: value,
      category,
      sort
    }
    dispatch(setFilters({ ...query }))
    const queryString = qs.stringify(query);
    navigate(`/?${queryString}`);
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
        <Categories category={category} setCategory={setCategory} />
        <Sort sort={sort} setSort={setSort} />
      </div>
    </>
  );
};

export default Search;
