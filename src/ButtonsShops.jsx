export default function ButtonShops() {
  const shop_list = ['Shop 1', "Shop 2", "Shop 3", "etc."]
  return (
    <>
      {" "}
      <div className="sidebar">
        <h4>Shops:</h4>
        {shop_list.map((i) => (
          <button className="buttonshops"> {i} </button>
        ))}
      </div>
    </>
  );
}
