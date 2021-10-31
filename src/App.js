import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={ProductDetails} />
        </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
