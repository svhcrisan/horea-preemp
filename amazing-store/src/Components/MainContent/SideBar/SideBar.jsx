import React from "react";

const SideBar = props => {
  const categories = Object.keys(props.categories);
  console.log(categories);
  return categories.map(category => {
    return <button>{category}</button>;
  });
};

export default SideBar;
