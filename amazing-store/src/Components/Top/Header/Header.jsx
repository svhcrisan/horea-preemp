import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

class Header extends React.Component {
  // daca am clasa folosesc render, daca am metoda nu
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="header-right-part">
          <div className="header-top-container">
            <Contact />
            <NavigationBar />
          </div>
          <div className="header-bottom-container">
            <SearchBar />
            <ShoppingCart />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
