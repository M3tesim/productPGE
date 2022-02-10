import React from "react";
import List from "./list";
function Dashboard(props) {

 

  return (
    <div className="dashboard">
      <h1>Edvora</h1>
      <h3>Products</h3>
     <List  brand={props.brand}  />
    </div>
  );
}

export default Dashboard;
