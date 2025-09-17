import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import ButtonShops from "./ButtonsShops";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="left">
          <Link to="/"> Flower Delivery Shop 🌷</Link>
        </div>
        <div className="right">
          <Link to="/cart">
            {" "}
            Shopping Cart 🛒{" "}
            {cart.length > 0 && <a className="cart">{cart.length}</a>}
          </Link>
        </div>
      </header>

      <Routes>
        {/* Main with Products */}
        <Route
          path="/"
          element={
            <div className="container">
              <ButtonShops />
              <ProductCard cart={cart} setCart={setCart} />
            </div>
          }
        />

        {/* Cart */}
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}
