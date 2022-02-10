import "./App.css";
import Dashboard from "./component/dashboard";
import Nav from "./component/nav";
import React, {useEffect,useState} from 'react'




export const dataContext = React.createContext();

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
        <dataContext.Provider value={data}>

          <Dashboard  brand={productsBrand()} />

          </dataContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
