import React, { useState } from "react";
import one from "./images/image-product-1.jpg";
import onethumb from "./images/image-product-1-thumbnail.jpg";
import two from "./images/image-product-2.jpg";
import twothumb from "./images/image-product-2-thumbnail.jpg";
import three from "./images/image-product-3.jpg";
import threethumb from "./images/image-product-3-thumbnail.jpg";
import four from "./images/image-product-4.jpg";
import fourthumb from "./images/image-product-4-thumbnail.jpg";
import "./Overlay.css"

function Overlay() {
  const [selectedImage, setSelectedImage] = useState(one);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="overlay">
      <div className="product-images">
        <img
          src={selectedImage}
          alt="selectedImage"
          className="display-image"
        />
        <div className="thumbnail">
          <img
            src={onethumb}
            alt="onethumbnail"
            className="display"
            style={{
              border: selectedImage === one ? "3px solid #ff7d1b" : "none",
            }}
            onClick={() => handleThumbnailClick(one)}
          />
          <img
            src={twothumb}
            alt="twothumb"
            className="display"
            style={{
              border: selectedImage === two ? "3px solid #ff7d1b" : "none",
            }}
            onClick={() => handleThumbnailClick(two)}
          />
          <img
            src={threethumb}
            alt="threethumb"
            className="display"
            style={{
              border: selectedImage === three ? "3px solid #ff7d1b" : "none",
            }}
            onClick={() => handleThumbnailClick(three)}
          />
          <img
            src={fourthumb}
            alt="fourthumb"
            className="display"
            style={{
              border: selectedImage === four ? "3px solid #ff7d1b" : "none",
            }}
            onClick={() => handleThumbnailClick(four)}
          />
        </div>
      </div>
    </div>
  );
}

export default Overlay;
