import React from "react";
import { Link } from "react-router-dom";
import Img from '../assets/about2.png'

const About = () => {
  return (
    <div className="container pt-5"> 
      <div className="row  justify-content-center align-items-center">
        <div className="col-lg-5 align-items-center text-center">
          <h1>About us</h1>
          <p className="my-4" style={{lineHeight:'25px' , fontSize:'18px'}}>
            Emart is a fast-growing ecommerce company that keeps culture and
            creativity at the heart of everything we do. Our mission is to help
            customers unlock their creativity and build exceptional content
            using our uniquely powerful design platform and our tirelessly
            helpful support and education resources-and do it all without
            writing a single line of code.
          </p>
          <Link to="/contect"  className="btn btn-primary py-2 mt-2">Connect With Us</Link>
        </div>
        <div className="col-lg-7">
            <img src={Img} alt="About Us" width='100%'/>
        </div>

      </div>
    </div>
  );
};

export default About;
