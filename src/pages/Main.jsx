import React from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import noResults from "../assets/img/no-results.svg";
import LoadingBlock from "../components/LoadingBlock";
import { fetchBooks } from "../redux/slices/booksSlice";
import spinner from "../assets/img/spinner.svg";

const Main = () => {
  const dispatch = useDispatch();
  const { items, totalItems, status } = useSelector((state) => state.book);
  const { category, sort, searchValue, startIndex } = useSelector(
    (state) => state.filter
  );

  const getBooks = () => {
    if (searchValue.length === 0 || !searchValue.trim()) {
      return;
    }
    const orderBy = sort !== "relevance" ? `&orderBy=${sort}` : "";
    const subject = category !== "all" ? `+subject:${category}` : "";
    dispatch(fetchBooks({ searchValue, orderBy, subject, startIndex }));
  };
  React.useEffect(() => {
    getBooks();
  }, [category, sort, searchValue]);

  const onClickLoad = () => {
    getBooks();
  };
  return (
    <div className="main">
      <div className="main__results">
        {status === "loading" ? "Searching..." : `Found ${totalItems} results`}
      </div>
      <div className="main__cards">
        {status === "loading" && items.length === 0 ? (
          [...new Array(4)].map((_, i) => <LoadingBlock key={i} />)
        ) : totalItems > 0 ? (
          items.map((obj, i) => (
            <Card key={obj.id + i} id={obj.id} {...obj.volumeInfo} />
          ))
        ) : (
          <div className="no-results">
            <div className="no-results--img">
              <img width={200} src={noResults} alt="noResults" />
            </div>
            <div className="no-results--title">No results</div>
          </div>
        )}
      </div>
      {totalItems - 30 >= startIndex &&
        items.length > 0 &&
        (status === "loading" ? (
          <img className="spinner" src={spinner} alt="loading" />
        ) : (
          <button onClick={onClickLoad} className="button">
            Load more
          </button>
        ))}
    </div>
  );
};

export default Main;
