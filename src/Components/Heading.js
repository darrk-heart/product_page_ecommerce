import React from "react";
import "./Heading.css";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import rasta from "./images/image-avatar.png";

function Heading() {
  return (
    <div className="head">
      <div className="firsthead">
        <img src={logo} alt="logo" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="secondhead">
        <img src={cart} alt="cart icon" className="cart" />
        <img src={rasta} alt="rastafara" className="rasta" />
      </div>
    </div>
  );
}

export default Heading;
