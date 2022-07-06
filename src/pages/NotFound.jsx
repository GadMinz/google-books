import React from "react";
import notFound from "../assets/img/404.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img width={256} src={notFound} alt="not-found" />
      <h2>This page isn't available</h2>
      <p>
        Click <a href="/">here</a> to go to the home page
      </p>
    </div>
  );
};

export default NotFound;
