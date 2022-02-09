import "./App.css";
import Dashboard from "./component/dashboard";
import Nav from "./component/nav";
import React, {useEffect,useState} from 'react'

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://assessment-edvora.herokuapp.com")
      .then((response) => response.json())
      .then((data) => {
        setData(() => data);
        console.log(data);
      });
  }, []);

   const productsBrand = ()=>{
    const allItems=data.map((item)=>(
      item.brand_name
    ))
    let uniqueItems = [...new Set(allItems)];
return uniqueItems
   }
   
   


  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-container">
          <Nav  data={data}/>
        </div>
        <div>
          <Dashboard  brand={productsBrand()}/>
        </div>
      </header>
    </div>
  );
}

export default App;
