import React, { useState } from "react";
import one from "./images/image-product-1.jpg";
import onethumb from "./images/image-product-1-thumbnail.jpg";
import two from "./images/image-product-2.jpg";
import twothumb from "./images/image-product-2-thumbnail.jpg";
import three from "./images/image-product-3.jpg";
import threethumb from "./images/image-product-3-thumbnail.jpg";
import four from "./images/image-product-4.jpg";
import fourthumb from "./images/image-product-4-thumbnail.jpg";
import "./Overlay.css";
import nexticon from "./images/icon-next.svg";
import previcon from "./images/icon-previous.svg";
import closeicon from "./images/icon-close.svg";

function Overlay() {
  const images = [one, two, three, four];
  const thumbnails = [onethumb, twothumb, threethumb, fourthumb];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  if (!showOverlay) {
    return null; 
  }

  const selectedImage = images[selectedImageIndex];

  return (
    <div className="overlay">
      <img
        src={closeicon}
        alt="close icon"
        className="close"
        onClick={handleCloseOverlay}
      />
      <div className="product-images">
        <div className="prevnext">
          <img
            src={previcon}
            alt="previous pictre"
            className="navigate"
            onClick={handlePrevClick}
          />
          <img
            src={selectedImage}
            alt="selectedImage"
            className="display-image"
          />
          <img
            src={nexticon}
            alt="next pictre"
            className="navigate"
            onClick={handleNextClick}
          />
        </div>
        <div className="thumbnail">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`thumbnail-${index}`}
              className="display"
              style={{
                border:
                  index === selectedImageIndex ? "3px solid #ff7d1b" : "none",
              }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overlay;
