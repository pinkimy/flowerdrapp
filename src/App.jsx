import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import ButtonShops from "./ButtonsShops";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <header className="header">
          <Link to="/" className="text"> Flower Shop 🌷</Link>
          <Link to="/cart" className="cart-icon">
            <span>🛒</span>
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
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
