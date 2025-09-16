import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import ProductCard from "./ProductCard";

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="left">
          <Link to="/"> Flower Delivery Shop 🌷</Link>
        </div>
        <div className="right">
          <Link to="/cart"> Shopping Cart 🛒</Link>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <div className="sidebar">
                  <h4>Shops:</h4>
                  <button className="buttonshops">Flower Shop 1</button>
                  <button className="buttonshops">Flower Shop 2</button>
                  <button className="buttonshops">Flower Shop 3</button>
                  <button className="buttonshops">Flower Shop 4</button>
                  <button className="buttonshops">Flower Shop 5</button>
                </div>
                <ProductCard />
              </div>
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
