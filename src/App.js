import "./App.css";
import Router from './Router/router'
import Navbar from "./components/Navbar";

export function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
