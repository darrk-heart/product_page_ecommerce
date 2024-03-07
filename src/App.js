// App.js
import React from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Product from "./Components/Product";

function App() {
  const addToCart = (item) => {
    console.log("Item added to cart:", item);
  };
  const updateTotalQuantity = (quantity) => {
    console.log("Updating total quantity:", quantity);
  };
  
  return (
    <div className="App">
      <div className="container">
        <Heading updateCartCount={updateTotalQuantity} />
        <Product addToCart={addToCart} updateCartCount={updateTotalQuantity} />
      </div>
    </div>
  );
}

export default App;
