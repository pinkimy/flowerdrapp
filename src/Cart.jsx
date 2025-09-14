import flower from "./assets/flower.png";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-6 space-y-8">
        {/* Форма пользователя */}
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

        {/* Список товаров в корзине */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h3 className="text-xl font-semibold">Cart items:</h3>

          {[1, 2].map((n) => (
            <div
              key={n}
              className="flex items-center justify-between border-b pb-4 last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={flower}
                  alt={`Flower ${n}`}
                  className="w-20 h-20 object-cover rounded"
                />
                <h5 className="text-lg font-medium">Flower {n}</h5>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">$10.00</p>
                <button className="text-red-500 hover:text-red-700 font-medium transition">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Футер с итоговой суммой */}
      <footer className="sticky bottom-0 bg-white shadow-inner p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h3 className="text-xl font-bold">Total: $0.00</h3>
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">
            Submit
          </button>
        </div>
      </footer>
    </div>
  );
}
