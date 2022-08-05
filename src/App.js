import "./App.css";
import Router from './Router/router'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";

export function App() {
  return (
    <div>
      <Navbar />
      <Router/>
    </div>
  );
}

export default App;
