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
    </div>
  );
}

export default App;
