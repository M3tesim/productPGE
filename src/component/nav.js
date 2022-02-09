import React from "react";
import Select from './select'
function Nav(props) {
 



  return (
    <div className="nav-content" >
      <p>Filters</p>
      <hr className="line" />

      <div >

        <Select data={props.data}/>

      </div>
    </div>
  );
}

export default Nav;



/*
       <select  >
        <option value="0">Products</option>

          {data.map((product,index)=>(
                      <option  key={index} value={product.product_name}>{product.product_name}</option>

          ))}
        
        </select>
        */