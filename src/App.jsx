import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import flower from "./assets/flower.png";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="linkshop">
          <Link to="/">🌷 Shop</Link>
          <span>|</span>
          <Link to="/cart">🛒 Shopping Cart</Link>
        </div>
        <div className="sort">
          <a>Sort by price ⬇️</a>
          <span>|</span>
          <a>Sort by date 📅</a>
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
                <div className="products">
                  <div className="product-card">
                    <img src={flower} width="100px" alt="Flower 1"></img>
                    <h5>Flower 1</h5>
                    <p>$10.00</p>
                    <button>Add to Cart</button>
                  </div>
                  <div className="product-card">
                    <img src={flower} width="100px" alt="Flower 2"></img>
                    <h5>Flower 2</h5>
                    <p>$10.00</p>
                    <button>Add to Cart</button>
                  </div>
                  <div className="product-card">
                    <img src={flower} width="100px" alt="Flower 3"></img>
                    <h5>Flower 3</h5>
                    <p>$10.00</p>
                    <button>Add to Cart</button>
                  </div>
                  <div className="product-card">
                    <img src={flower} width="100px" alt="Flower 4"></img>
                    <h5>Flower 4</h5>
                    <p>$10.00</p>
                    <button>Add to Cart</button>
                  </div>
                  <div className="product-card">
                    <img src={flower} width="100px" alt="Flower 4"></img>
                    <h5>Flower 5</h5>
                    <p>$10.00</p>
                    <button>Add to Cart</button>
                  </div>
                  <div className="product-card">
                    <img src={flower} width="100px" alt="Flower 4"></img>
                    <h5>Flower 6</h5>
                    <p>$10.00</p>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
