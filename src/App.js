import "./App.css";
import "./Components/Heading";
import Heading from "./Components/Heading";
import Product from "./Components/Product";
import Overlay from "./Components/Overlay";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <div>
          <Heading />
          <Product />
        </div> */}
        <Overlay />
      </div>
    </div>
  );
}

export default App;
