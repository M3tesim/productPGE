import React, { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(async () => {
     await fetch("https://assessment-edvora.herokuapp.com")
      .then((response) => response.json())
      .then((data) => {
        setData(() => data);
        console.log(data);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Edvora</h2>
      <h5>Products</h5>
      <ol>
        {data.map((product,index) => (
          <li key={index}> {product.product_name} </li>
        ))}
      </ol>
    </div>
  );
}

export default Dashboard;
