import React from "react";
import background from "../assets/bakground.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="card border-0">
      <img src={background} alt="background" />
      </div>
      {/* <Products/> */}
    </div>
  );
};

export default Home;
