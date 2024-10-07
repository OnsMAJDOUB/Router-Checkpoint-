import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

import Contact from "./Pages/Contact";
import Errorpage from "./Pages/ErrorPage";
import Movies from "./Pages/Movies";
import { moviesData } from "./moviesData";
import { useState } from "react";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  const [movies] = useState(moviesData);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Errorpage />} />
        <Route path="/movie-details" element={<MovieDetails movies={movies}/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
