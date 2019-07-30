import React from "react";
import "./SideBar.css";

const SideBar = props => {
  const categories = Object.keys(props.categories);
  console.log(categories);
  return (
    <div className="sidebar-container">
      <div className="all-categories">ALL CATEGORIES</div>
      {categories.map((category, index) => {
        return (
          <button key={index} className="button-category-name">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
