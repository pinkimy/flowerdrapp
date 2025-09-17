export default function Cart({ cart }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-6 space-y-8">
        {/* User */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold">Your Details</h2>
          {[
            { label: "Name", placeholder: "Name" },
            { label: "Email", placeholder: "Email" },
            { label: "Phone", placeholder: "Phone" },
            { label: "Address", placeholder: "Address" },
          ].map(({ label, placeholder }) => (
            <div key={label} className="flex flex-col">
              <label className="mb-2 text-gray-700">{label}:</label>
              <input
                type="text"
                placeholder={placeholder}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
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
        </div>
      </main>
    </div>
  );
}
