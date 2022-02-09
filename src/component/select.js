import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

export default function Select(props) {
  const data = props.data;
  const states = uniqueValues("address", "state");
  const cities = uniqueValues("address", "city");

  const [newStates, setStates] = useState(states);
  const [newCity, setCity] = useState(cities);

  // creaating array with all the states

  // this function removes dublicates from the select menue
  function uniqueValues(name, name2) {
    let allItems;
    if (name2 === true) {
      allItems = data.map((item) => item[name][name2]);
    } else {
      allItems = data.map((item) => item[name]);
    }

    let uniqueItems = [...new Set(allItems)];

    const items = uniqueItems.map((item, index) => ({
      key: index,
      text: item,
      value: item,
    }));
    return items;
  }

  

  const products = uniqueValues("product_name");


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
