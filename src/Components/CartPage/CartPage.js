import React from "react";
import "./CartPage.css";
import bin from "../../images/icon-delete.svg";
import one from "../../images/image-product-1.jpg";

function CartPage() {
  return (
    <div className="cartpage">
      <div className="cart-head">Cart</div>
      <div className="cart-body">
        {/* <span>Your cartpage is empty</span> */}

        <div className="amount">
          <div className="amount-check">
            <img src={one} alt="shoe capture" />
            <div className="amount-check-text">
              <span>Fall Limited Edition Sneakers</span>
              <div>
                <span>$125.00 x 3</span>
                <span className="total">$375.00</span>
              </div>
            </div>
          </div>
          <img src={bin} alt="delete" className="delete" />
        </div>
        <div className="checkout">Checkout</div>
      </div>
    </div>
  );
}

export default CartPage;
