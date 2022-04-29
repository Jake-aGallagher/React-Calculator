import "./App.css";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="App">
      <div className="info">
      <h1 className="title">Javascript Calculator</h1>
      <p className="desc">Made by Jake Gallagher</p>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
