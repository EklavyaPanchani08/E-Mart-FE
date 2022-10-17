import React from 'react'
import { useRoutes } from 'react-router-dom';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Product from '../pages/OneProduct/Product';
import Products from '../pages/Products/Products';
import Register from '../pages/Register/Register';
import Search from '../pages/Search/Search';

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
    {
      path: "/search",
      isExact: true,
      element: <Search />,
    },
  ]);

  return element;
}

export default Router;
