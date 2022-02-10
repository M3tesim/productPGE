import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

export default function Select(props) {
  const data = props.data;
  const states = uniqueValues2("address", "state");
  const cities = uniqueValues2("address", "city");
console.log("here "+JSON.stringify(states))

  const [newStates, setStates] = useState(states);
  const [newCity, setCity] = useState(cities);

  // creaating array with all the states

  // this function removes dublicates from the select menue
  function uniqueValues1(name) {
    let allItems;
      allItems = data.map((item) => item[name]);

    let uniqueItems = [...new Set(allItems)];

    const items = uniqueItems.map((item, index) => ({
      key: index,
      text: item,
      value: item,
    }));
    return items;
  }
 // this function removes dublicates from the select menue
 function uniqueValues2(name, name2) {
  let allItems;
    allItems = data.map((item) => item[name][name2]);
  let uniqueItems = [...new Set(allItems)];

  const items = uniqueItems.map((item, index) => ({
    key: index,
    text: item,
    value: item,
  }));
  return items;
}
  

  const products = uniqueValues1("product_name");


  // change the value of array state to show the states of the choosen product
  const selectedProduct = (e, { value }) => {
    const newdata = data.filter((item) => item.product_name !== value);
    const allItems = newdata.map((item) => item.address.state);

    let uniqueValues = [...new Set(allItems)];

    const newState = uniqueValues.map((item, index) => ({
      key: index,
      text: item,
      value: item
    }));
    setStates(newState);
  };

  // change the value of array city  of the choosen state
  const selectedState = (e, { value }) => {
    const newdata = data.filter((item) => item.address.state !== value);
    const allItems = newdata.map((item) => item.address.city);

    let uniqueValues = [...new Set(allItems)];

    const newCity = uniqueValues.map((item, index) => ({
      key: index,
      text: item,
      value: item
    }));
    setCity(newCity);
  };

  return (
    <>
      <Dropdown
        placeholder="Products"
        search
        selection
        options={products}
        onChange={selectedProduct}
      />

      <Dropdown
        placeholder="State"
        search
        selection
        options={newStates}
        onChange={selectedState}
      />

      <Dropdown placeholder="city" search selection options={newCity} />
    </>
  );
}
