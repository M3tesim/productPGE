import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

export default function Select(props) {
  const data = props.data;

  // creaating array with all the states
  const allStates = data.map((item, index) => ({
    key: index,
    text: item.address.state,
    value: item.address.state,
  }));

  const [state, setState] = useState(allStates);
  //creating array of all the products

  const allProducts = data.map((item, index) => ({
    key: index,
    text: item.product_name,
    value: item.product_name,
  }));

  // change the value of array state to show the states of the choosen product
  const selectedProduct = (e, { value }) => {
    
    const newdata = data.filter((item) =>  item.product_name !== value  );

    const newState = newdata.map((item, index) => ({
      key: index,
      text: item.address.state,
      value: item.address.state,
    }));
    console.log("the new data " + newState.map((item) => item.text));
    setState(newState);
  };

  return (
    <>
      <Dropdown
        placeholder="Products"
        search
        selection
        options={allProducts}
        onChange={selectedProduct}
      />

      <Dropdown placeholder="State" search selection options={state} />
    </>
  );
}
