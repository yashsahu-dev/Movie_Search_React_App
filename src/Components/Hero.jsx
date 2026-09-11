import React from "react";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div className="hero-heading">
      <h1>
        <span className="caps">F</span>ind <span className="caps">M</span>
        ovies <span className="caps">Y</span>ou'll{" "}
        <span className="caps">L</span>
        ove
      </h1>
      <p>Search from thousands of movies and discover your next favorite.</p>
      <Searchbar/>
    </div>
  );
};

export default Hero;
