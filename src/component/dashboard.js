import React from "react";
import List from "./list";
function Dashboard(props) {

 

  return (
    <div className="dashboard">
      <h2>Edvora</h2>
      <h5>Products</h5>
     <List  brand={props.brand}  />
    </div>
  );
}

export default Dashboard;
