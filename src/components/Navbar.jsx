import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-black.png";
import cart from "../assets/icon/cart.svg";
import search from "../assets/icon/search.svg";
import login from "../assets/icon/login.svg";
import toggle from "../assets/icon/toggle.svg";
import "../scss/button.scss";
import "../scss/comman.scss";

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
            <img src={logo} alt="logo" className="nav-logo" width="170px" />
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
                  Man's
                </Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link className="nav-link active" to="/products">
                  Woman's
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
            <ul className="navbar-nav">
              <li className=" mx-1" style={{borderRight:'1px solid black'}}>
                <Link
                  className="nav-link active"
                  to="/search"
                >
                  <img className="me-1" src={search} width="20px "/>
                  Search
                </Link>
              </li>
              <li className="mx-1"style={{borderRight:'1px solid black'}}>
                <Link className="nav-link active" to="/cart">
                  <img className="me-2" src={cart} width="20px" />
                  Cart 0
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/login" className="nav-link active">
                  Login
                  <img className="ms-1" src={login} width="20px" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-toggle">
            <a href="#" className="text-dark manu-toggle">
              <img width="20px" src={toggle}/>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
