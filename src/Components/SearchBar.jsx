import React from "react";

const Searchbar = () => {
  return (
    <div className="search-box">
      <input
        type="text"
        name=""
        id="srh-inp"
        placeholder="🔍Search for movies..."
      />
      <button className="btn" id="srh-btn">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
