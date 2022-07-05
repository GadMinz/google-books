import React from "react";
import book from "../assets/img/error-book.png";
import { Link } from "react-router-dom";

const Card = ({ title, categories, authors, imageLinks, id }) => {
  const bookImg = imageLinks
    ? imageLinks.thumbnail || imageLinks.smallThumbnail
    : book;
  return (
    <Link to={`/books/${id}`} className="card">
      <div className="card__image">
        <img src={bookImg} alt="book" />
      </div>
      <div className="card__category">
        {categories ? categories[0] : <br />}
      </div>
      <div className="card__title">{title ? title : <br />}</div>
      <div className="card__authors">
        {authors ? authors.join(", ") : <br />}
      </div>
    </Link>
  );
};

export default Card;
