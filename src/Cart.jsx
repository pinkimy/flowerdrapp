import { useState } from "react";
import.meta.env;

const link = import.meta.env.VITE_LINK;

export default function Cart({ cart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [cartItems, setCartItems] = useState(
    cart.map((item) => ({ ...item, quantity: 1 }))
  );

  const increaseQuantity = (index) => {
    const newCart = [...cartItems];
    newCart[index].quantity++;
    setCartItems(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) newCart[index].quantity--;
    setCartItems(newCart);
  };

  const handleSubmit = async () => {
    if (!name || !email || !phone || !address || cartItems.length === 0) {
      alert("Заполните все поля и добавьте товары в корзину!");
      return;
    }

    try {
      const payload = {
        name,
        email,
        phone,
        address,
        cart: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
      };

      const res = await fetch(`${link}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка сервера");

      alert("Заказ успешно отправлен!");
      setCartItems([]);
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке заказа");
    }
  };

  return (
    <div className="cart-page">
      <div className="user-info">
        <h2>Your Details</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="cart-items">
        <h3>Cart items:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} — ${item.price.toFixed(2)}
              </span>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={handleSubmit} className="submit-order">
          Submit Order
        </button>
      </div>
    </div>
  );
}
