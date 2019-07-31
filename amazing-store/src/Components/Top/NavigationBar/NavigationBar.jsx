import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <ul className="main-menu">
        <li className="menu-item">
          <a href="">Shipping</a>{" "}
        </li>
        <li className="menu-item">
          <a href="">Blog</a>
        </li>
        <li className="menu-item">
          <a href="">Company</a>
        </li>
        <li className="menu-item">
          <a href="">My account</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
