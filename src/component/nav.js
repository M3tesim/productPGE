import React from "react";
import { useState, useEffect } from "react";
import Select from './select'
function Nav() {
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
    <div className="nav-content" >
      <p>Filters</p>
      <hr className="line" />

      <div >

        <Select data={data}/>

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