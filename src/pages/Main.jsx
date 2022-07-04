import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import noResults from "../assets/img/no-results.svg";

const Main = () => {
  const { items, totalItems, status } = useSelector((state) => state.book);
  return (
    <div className="main">
      <div className="main__results">
        {status === "loading" ? "Searching..." : `Found ${totalItems} results`}
      </div>
      <div className="main__cards">
        {status === "loading" ? (
          ""
        ) : totalItems > 0 ? (
          items.map((obj) => <Card key={obj.id} {...obj.volumeInfo} />)
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
