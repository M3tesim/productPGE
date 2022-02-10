import React, { useContext } from "react";
import { dataContext } from "../App";
function List(props) {
  const { brand } = props;
  const data = useContext(dataContext);

  return (
    <div className="list">
      {props.brand.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>
          <div className="wrapper">
            {data.map((item, index) => (
              <div key={index} className="item">
           <img className="img" src={item.image} />
                <div className="img" >
                    <h5>{item.product_name}</h5>
                    <h5>{item.brand_name}</h5>
                   <h5>${item.price}</h5> 
                </div>
                <div>
               <span>{item.address.state} {item.address.city}</span> 

                {item.date}
                {item.discription}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}

export default List;
