import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import NavigationBar from "../NavigationBar/NavigationBar";
class Header extends React.Component {
  // daca am clasa folosesc render, daca am metoda nu
  render() {
    return (
      <div className="header-container">
        <div className="header-top-container">
          <Logo />
          <Contact />
          <NavigationBar />
        </div>
      </div>
    );
  }
}

export default Header;
