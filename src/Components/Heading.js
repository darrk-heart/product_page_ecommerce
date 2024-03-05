import React, { useState } from "react";
import "./Heading.css";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import rasta from "./images/image-avatar.jpg";
import CartPage from "./CartPage";

function Heading() {
  const [showCartPage, setShowCartPage] = useState(false);

  const handleCartClick = () => {
    setShowCartPage(!showCartPage); 
  };

  return (
    <div className="head">
      <div className="first-head">
        <img src={logo} alt="logo" />
        <ul className="menu">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="second-head">
        <img
          src={cart}
          alt="cart icon"
          className="cart-icon"
          onClick={handleCartClick}
        />
        <img src={rasta} alt="rastafara" className="avatar" />
      </div>
      {showCartPage && <CartPage />}
    </div>
  );
}

export default Heading;
