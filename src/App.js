import Discounted from "./components/Discounted.jsx";
import Explore from "./components/Explore.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Features />
      <Discounted />
      <Explore />
    </div>
  );
}

export default App;
