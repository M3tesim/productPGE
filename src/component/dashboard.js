import React, { useState, useEffect } from "react";
function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
     fetch("https://assessment-edvora.herokuapp.com")
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
      
    </div>
  );
}

export default Dashboard;
