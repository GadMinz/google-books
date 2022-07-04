import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Main = () => {
  const { items, status } = useSelector((state) => state.book);
  return (
    <div className="main">
      <div className="main__results">Found 1337 results</div>
      <div className="main__cards">
        <Card />
      </div>
    </div>
  );
};

export default Main;
