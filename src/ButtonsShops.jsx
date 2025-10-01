export default function ButtonShops() {
  const shopList = ["Shop 1", "Shop 2", "Shop 3", "etc."];
  return (
    <>
      <div className="sidebar">
        <h4>Shops:</h4>
        {shopList.map((shop, index) => (
        <button key={index} className="buttonshops">
          {shop}
          </button>
        ))}
      </div>
    </>
  );
}
