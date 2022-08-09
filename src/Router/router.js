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

  return element;
};

export default Router;
