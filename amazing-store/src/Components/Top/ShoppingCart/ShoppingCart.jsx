import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <div className="my-cart">
      <i className="fas fa-shopping-cart cart-icon" />
      <div className="my-cart-text">MY CART</div>
      <div className="count"> 12 </div>
    </div>
  );
};

export default ShoppingCart;
