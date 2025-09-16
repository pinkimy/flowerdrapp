import useFetch from "./hooks/useFetch.js";

export default function ProductCard() {
  const data = useFetch("http://localhost:3000/products");

  if (!data) return <div>Загрузка...</div>;

  return (
    <div className="products">
      {data.products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={`src/assets${product.path}`}
            width="100px"
            alt={product.name}
          />
          <h5>{product.name}</h5>
          <p>${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
