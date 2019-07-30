import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <i className="fas fa-search" />
      <input type="text" placeholder="Search products by SKU or name" />
    </div>
  );
};

export default SearchBar;
