import React from "react";
import Book from "./ui/Book";
import { books } from '../data.js';

const Features = () => {
  console.log(books);
  return (
    <section id="features">
      <div className="row">
        <h2 className="section__title">
          Featured <span className="purple">Books</span>
        </h2>
        <div className="books">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </section>
  );
};

export default Features;
