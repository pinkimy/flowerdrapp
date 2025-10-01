import useFetch from "./hooks/useFetch.js";
import.meta.env;

const link = import.meta.env.VITE_LINK;

export default function ProductCard({ cart, setCart }) {
  const data = useFetch(`${link}/products`);

  if (!data) return <div>Загрузка...</div>;

  return (
    <span>
      {" "}
      Products:
      <div className="products">
        {data.products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={`src/assets/${product.path}`}
              width="100px"
              alt={product.name}
            />
            <h5>{product.name}</h5>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => setCart([...cart, product])}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </span>
  );
}
