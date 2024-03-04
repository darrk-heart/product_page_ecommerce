import React from "react";
import "./Product.css";
import one from "./images/image-product-1.jpg";
import onethumb from "./images/image-product-1-thumbnail.jpg";
import two from "./images/image-product-2.jpg";
import twothumb from "./images/image-product-2-thumbnail.jpg";
import three from "./images/image-product-3.jpg";
import threethumb from "./images/image-product-3-thumbnail.jpg";
import four from "./images/image-product-4.jpg";
import fourthumb from "./images/image-product-4-thumbnail.jpg";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";

function Product() {
  return (
    <div className="product">
      <div className="product-images">
        <img src={one} alt="imageone" className="display-image" />
        <div className="thumbnail">
          <img
            src={onethumb}
            alt="imageonethumbnail"
            style={{
              border: "3px solid #ff7d1b",
            }}
          />
          <img src={twothumb} alt="imagetwothumbnail" />
          <img src={threethumb} alt="imagethreethumbnail" />
          <img src={fourthumb} alt="imagefourthumbnail" />
        </div>
      </div>
      <div className="product-text">
        <div className="main-text">
          <h5>SNEAKER COMPANY</h5>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear <br />{" "}
            companion. Featuring a durable rubber outer sole, they'll <br />{" "}
            withstand everything the weather can offer.
          </p>
        </div>
        <div className="price-text">
          <div className="dollars">
            <h2>$125.00</h2>
            <span>50%</span>
          </div>
          <span className="old-price">$250.00</span>
          <div className="action">
            <div className="plus-minus">
              <img src={minus} alt="minus sign" />
              <span>0</span>
              <img src={plus} alt="plus sign" />
            </div>
            <div className="addcart">
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
