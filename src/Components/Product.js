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
      <div>
        
      </div>
    </div>
  );
}

export default Product;
