import { useState } from "react";

export default function Cart({ cart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !phone || !address || cart.length === 0) {
      alert("Заполните все поля и добавьте товары в корзину!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          cart: cart.map((item) => ({
            productId: item.id,
            quantity: 1,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка сервера");
      }

      alert("Заказ успешно отправлен!");
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке заказа");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-6 space-y-8">
        {/* User */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold">Your Details</h2>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Phone:</label>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Address:</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Cart */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h3 className="text-xl font-semibold">Cart items:</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} — ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Order
          </button>
        </div>
      </main>
    </div>
  );
}
