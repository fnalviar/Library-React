import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id); //+ means to make book.id and id into a number

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistOnCart() {
    return cart.find((book) => book.id === +id); //+ means to make book.id and id into a number
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt="Book Image"
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae rem error quos beatae, ad debitis deleniti ipsa
                    quam porro nemo repudiandae voluptatum voluptatibus, enim
                    repellendus modi possimus, ducimus veniam sunt.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae rem error quos beatae, ad debitis deleniti ipsa
                    quam porro nemo repudiandae voluptatum voluptatibus, enim
                    repellendus modi possimus, ducimus veniam sunt.
                  </p>
                </div>
                {bookExistOnCart() ? (
                  <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="book__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id) //+ means to make book.id and id into a number
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
