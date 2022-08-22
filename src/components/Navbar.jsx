import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-black.png"

const Navbar = () => {

  // (document).ready(function () {
  //   ('.nav-toggle').click(function () {
  //       ('navbar-collapse').slideToggle()
  //   });
  // }); 

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light py-2 bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-4 fs-4" to="/">
            <img src={logo} alt="logo" width='170px' />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link className="nav-link active" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <Link to="/login" className="btn btn-outline-dark">
                Login
              </Link>
              <Link to="/regiter" className="btn btn-outline-dark ms-2">
                Regiter
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                Cart (0)
              </Link>
            </div>
          </div>
      <div className="nav-toggle">
        <a  href="#" className="text-dark manu-toggle"><i className="fa-solid fa-align-right"></i></a>
      </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
