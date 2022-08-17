import React from 'react'
import {useRoutes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Login from '../components/Login';
import Product from '../components/Product';
import Products from '../components/Products';
import Regiter from '../components/Regiter';
import Test from '../components/Test';
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Product from "../components/Product";
import Products from "../components/Products";
import Register from "../components/Register";
import Test from "../components/Test";

const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      isExact: true,
      element: <Home />,
    },
    {
      path: "/products",
      isExact: true,
      element: <Products />,
    },
    {
      path: "/products/:id",
      isExact: true,
      element: <Product />,
    },
    {
      path: "/login",
      isExact: true,
      element: <Login />,
    },
    {
      path: "/regiter",
      isExact: true,
      element: <Register />,
    },
  ]);

<<<<<<< HEAD
    let element = useRoutes([
      {
        path: "/",
        isExact: true,
        element: <Home />,
      },
      {
        path: "/products",
        isExact: true,
        element: <Products />,
      },
      {
        path: "/products/:id",
        isExact: true,
        element: <Product />,
      },
      {
        path: "/login",
        isExact: true,
        element: <Login />,
      },
      {
        path: "/regiter",
        isExact: true,
        element: <Regiter />,
      },
      {
        path: "/about",
        isExact: true,
        element: <About />,
      },
      {
        path: "/contact",
        isExact: true,
        element: <Contact />,
      },
    ]);
  
    return element;
}
=======
  return element;
};
>>>>>>> 9b99ab97b11e2f8752b3f0a6e27e21e5ad88f74d

export default Router;
