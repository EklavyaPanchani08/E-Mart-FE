import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-4 fs-4" to="/">
            <img src={logo} alt="logo" width='40px'/>
            E-Mart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="button">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
