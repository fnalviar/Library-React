import React from "react";
import { books } from '../data.js';
import Book from "./Book.jsx";

const Features = () => {

  function getFiveStarBooks() {
  }

  return (
    <section id="features">
      <div className="row">
        <h2 className="section__title">
          Featured <span className="purple">Books</span>
        </h2>
        <div className="books">
          {
            books
            .filter(book => book.rating === 5)
            .slice(0, 4)
            .map(book => (
              <Book book= {book} 
              key= {book.id}/>
            ))
          }
      
        </div>
      </div>
    </section>
  );
};

export default Features;
