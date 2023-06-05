import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/pages/Home.jsx";
import Books from "./components/pages/Books.jsx";
import BookInfo from "./components/pages/BookInfo.jsx";
import { books } from "./data.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact render={() => <Home books={books} />} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" exact render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
