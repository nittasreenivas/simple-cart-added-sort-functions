import { useState, useEffect } from "react";
const Products = () => {
  const [prod, setProd] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("data::", data);
    setProd([...data]);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleDelete = (i) => {
    alert(i);
    let temp = [...prod];
    temp.splice(i, 1);
    setProd([...temp]);
  };
  const handlePriceASC = () => {
    console.log("asc button clicked");
    let temp = [...prod];
    temp.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else {
        return -1;
      }
    });
    setProd([...temp]);
  };
  const handlePriceDES = () => {
    let temp = [...prod];
    temp.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else {
        return 1;
      }
    });
    setProd([...temp]);
  };
  const handleNameASc = () => {
    let temp = [...prod];
    temp.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setProd([...temp]);
  };
  const handleNameDes = () => {
    let temp = [...prod];
    temp.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
    setProd([...temp]);
  };
  return (
    <div>
      <div>
        <button onClick={handlePriceASC}>sort by price asc </button>&nbsp;&nbsp;
        <button onClick={handlePriceDES}>sort by price des </button>&nbsp;&nbsp;
        <button onClick={handleNameASc}>sort by Name ASC </button>&nbsp;&nbsp;
        <button onClick={handleNameDes}>sort by Name DES </button>&nbsp;&nbsp;
      </div>
      <div className="products-container">
        {prod.map((item, i) => {
          return (
            <div key={i} className="prod">
              <h4> {item.title} </h4>
              <img alt="" src={item.image} width={122} />
              <h4> ${item.price} </h4>
              <button onClick={() => handleDelete(i)}>del-prod</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
