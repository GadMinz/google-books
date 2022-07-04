import React from "react";
import book from "../assets/img/error-book.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={book} alt="book" />
      </div>
      <div className="card__category">Computers</div>
      <div className="card__title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
        dignissimos dolorum eveniet fuga fugiat illo, illum iste itaque
        necessitatibus nisi omnis optio quae quod veniam. Explicabo ipsum quas
        ratione?
      </div>
      <div className="card__authors">Павел Лещев</div>
    </div>
  );
};

export default Card;
