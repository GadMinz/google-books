import React from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import noResults from "../assets/img/no-results.svg";
import LoadingBlock from "../components/LoadingBlock";
import { fetchBooks} from "../redux/slices/booksSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { items, totalItems, status } = useSelector((state) => state.book);
  const { category, sort, searchValue } = useSelector((state) => state.filter);
  const getBooks = () => {
    if (searchValue.length === 0 || !searchValue.trim()) {
      return;
    }
    const orderBy = sort !== "relevance" ? `&orderBy=${sort}` : "";
    const subject = category !== "all" ? `+subject:${category}` : "";
    dispatch(fetchBooks({ searchValue, orderBy, subject }));
  };
  React.useEffect(() => {
    getBooks();
  }, [category, sort, searchValue]);

  return (
    <div className="main">
      <div className="main__results">
        {status === "loading" ? "Searching..." : `Found ${totalItems} results`}
      </div>
      <div className="main__cards">
        {status === "loading" ? (
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
    </div>
  );
};

export default Main;
