import "./App.css";
import Dashboard from "./component/dashboard";
import Nav from "./component/nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-container">
          <Nav />
        </div>
        <div>
          <Dashboard />
        </div>
      </header>
    </div>
  );
}

export default App;
