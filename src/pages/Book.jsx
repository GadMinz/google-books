import React from "react";
import axios from "axios";

const Book = () => {
  const [book, setBook] = React.useState({
    image: "",
    categories: [],
    title: "",
    authors: [],
    description: "",
  });
  React.useEffect(() => {
    const bookId = window.location.pathname.split("/").pop();
    const fetchBook = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const info = data.volumeInfo;
        setBook({
          image: info.imageLinks.extraLarge,
          categories: info.categories,
          title: info.title,
          authors: info.authors,
          description: info.description,
        });
      } catch (e) {
        alert("Ошибка при запросе данных");
        console.error(e);
      }
    };
    fetchBook();
  }, []);

  return (
    <div className="book">
      <div className="book__image">
        <img src={book.image} alt="book-img" />
      </div>
      <div className="book__info">
        <div className="book__info-categories">
          {book.categories ? book.categories.join(" / ") : <br />}
        </div>
        <div className="book__info-title">
          {book.title ? book.title : <br />}
        </div>
        <div className="book__info-authors">
          {book.authors ? book.authors.join(", ") : <br />}
        </div>

        {book.description && (
          <div className="book__info-description">{book.description}</div>
        )}
      </div>
    </div>
  );
};

export default Book;
