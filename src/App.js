// App.js
import React, { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Product from "./Components/Product";

function App() {
  // Define addToCart function
  const addToCart = (item) => {
    // Implement your logic to add item to cart
    console.log("Item added to cart:", item);
  };

  // Define updateTotalQuantity function
  const updateTotalQuantity = (quantity) => {
    // Implement your logic to update total quantity
    console.log("Updating total quantity:", quantity);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Pass both addToCart and updateTotalQuantity functions as props */}
        <Heading updateCartCount={updateTotalQuantity} />
        <Product addToCart={addToCart} updateCartCount={updateTotalQuantity} />
      </div>
    </div>
  );
}

export default App;
