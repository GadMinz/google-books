import React from "react";
import Card from "../components/Card";

const Main = () => {
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
