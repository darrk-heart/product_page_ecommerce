import "./App.css";
import "./Components/Heading";
import Heading from "./Components/Heading";
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <Product />
      </div>
    </div>
  );
}

export default App;
