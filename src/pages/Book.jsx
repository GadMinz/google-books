import React from "react";
import axios from "axios";
import bookNotImg from "../assets/img/error-book.png";
import spinner from "../assets/img/spinner.svg";

const Book = () => {
  const [book, setBook] = React.useState({
    image: "",
    categories: [],
    title: "",
    authors: [],
    description: "",
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const bookId = window.location.pathname.split("/").pop();
    const fetchBook = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        const info = data.volumeInfo;
        const bookImg = info.imageLinks
          ? info.imageLinks.extraLarge ||
            info.imageLinks.large ||
            info.imageLinks.medium
          : bookNotImg;
        setBook({
          image: bookImg,
          categories: info.categories,
          title: info.title,
          authors: info.authors,
          description: info.description,
        });
      } catch (e) {
        alert("Ошибка при запросе данных");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBook();
  }, []);

  return (
    <>
      {isLoading ? (
        <img width={300} className="spinner" src={spinner} alt="" />
      ) : (
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
      )}
    </>
  );
};

export default Book;
