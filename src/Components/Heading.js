// Heading.js
import React, { useState } from "react";
import "./Heading.css";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import rasta from "./images/image-avatar.jpg";
import CartPage from "./CartPage";

function Heading({ updateCartCount }) {
  const [showCartPage, setShowCartPage] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0); // State to keep track of total quantity in cart

  const handleCartClick = () => {
    setShowCartPage(!showCartPage);
  };

  // Function to update total quantity in cart
  const updateTotalQuantity = (quantity) => {
    setCartQuantity(quantity);
    // Call updateCartCount prop with updated cart quantity
    updateCartCount(quantity);
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
        <div>
          {/* Display total quantity in cart */}
          <span className="cart-count">{cartQuantity}</span>
          <img
            src={cart}
            alt="cart icon"
            className="cart-icon"
            onClick={handleCartClick}
          />
        </div>
        <img src={rasta} alt="rastafara" className="avatar" />
      </div>

      {showCartPage && <CartPage />}
    </div>
  );
}

export default Heading;
