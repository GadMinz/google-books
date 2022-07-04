import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Main = () => {
  const { items, totalItems, status } = useSelector((state) => state.book);
  return (
    <div className="main">
      <div className="main__results">
        {status === "loading" ? "Searching..." : `Found ${totalItems} results`}
      </div>
      <div className="main__cards">
        {status === "loading"
          ? ""
          : items.map((obj) => <Card key={obj.id} {...obj.volumeInfo} />)}
      </div>
    </div>
  );
};

export default Main;
