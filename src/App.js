import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navibar from "./components/Navibar";
import Footnote from "./components/Footnote";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navibar />
        <Footnote />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/info" />
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
