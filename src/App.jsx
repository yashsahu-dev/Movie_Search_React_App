
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Notfound from "./pages/Notfound";
import MovieDets from "./pages/MovieDets";
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/moviedets" element={<MovieDets />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;