import React, { useContext } from "react";
import { dataContext } from "../App";
function List(props) {
  const data = useContext(dataContext);

  return (
    <div className="list">
      {props.brand.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>
          <hr></hr>
          <div className="wrapper">
            
            {data.map((item, index) => (
              <div key={index} className="item">
                <img className="img" src={item.image} alt="product img"/>
                <div className="img">
                  <h5>{item.product_name}</h5>
                  <h5>{item.brand_name}</h5>
                  <h5>${item.price}</h5>
                </div>

                <div className="info">{item.address.state}</div>

                <div className="info">Date: {item.date}</div>

                <div className="disc"> {item.discription}</div>
              </div>
            ))}
            
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default List;
