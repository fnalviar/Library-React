import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/pages/Home.jsx";
import Books from "./components/pages/Books.jsx";
import BookInfo from "./components/pages/BookInfo.jsx";
import { books } from "./data.js";
import Cart from "./components/pages/Cart.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    // const duplicateItem = cart.find((item) => +item.id === +book.id);
    // if (duplicateItem) {
    //   setCart(
    //     cart.map((item) => {
    //       if (item.id === duplicateItem.id) {
    //         return {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         };
    //       } else {
    //         return item;
    //       }
    //     })
    //   );
    // } else {
    //   setCart([...cart, { ...book, quantity: 1 }]);
    // }

    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity, //+ means to make the quantity into a number
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
    console.log("removeItem", item)
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          exact
          render={() => <BookInfo books={books} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
