import { Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/pages/Home.jsx";
import Books from "./components/pages/Books.jsx";
import { books } from "./data.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" render={ () => <Books books={books} />} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
