import React from "react";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
import banner4 from "../assets/banner4.jpeg";
import banner5 from "../assets/banner5.jpeg";
import imgForTest from "../assets/testHome1.jpeg";
import { Carousel, Card, Image } from 'antd';
import '../scss/home.scss'
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div>
      <Carousel autoplay>
        <div>
          <img className="slider" src={banner2} alt="background" />
        </div>
        <div>
          <img className="slider" src={banner1} alt="background" />
        </div>
        <div>
          <img className="slider" src={banner3} alt="background" />
        </div>
        <div>
          <img className="slider" src={banner4} alt="background" />
        </div>

        <div>
          <img className="slider" src={banner5} alt="background" />
        </div>
      </Carousel>

      <div className="d-flex mx-auto">
        <div className="card h-100 text-center p-4">
          <img
            src={imgForTest}
            className="card-img-top"
            height="250px"
            width="250px"
          />
          <div className="card-body">
            <h5 className="card-title">
              Hii fjkehkrhfuoh cxiubvdsoigdhicoxn dsiufhieuahuxkvnjcx
            </h5>
            <p className="card-text lead fw-bold">$500</p>
            <Link
              to={"/products/"}
              className="btn btn-outline-dark"
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div className="card h-100 text-center p-4">
          <img
            src={imgForTest}
            className="card-img-top"
            height="250px"
            width="250px"
          />
          <div className="card-body">
            <h5 className="card-title">
              Hii fjkehkrhfuoh cxiubvdsoigdhicoxn dsiufhieuahuxkvnjcx
            </h5>
            <p className="card-text lead fw-bold">$500</p>
            <Link
              to={"/products/"}
              className="btn btn-outline-dark"
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div className="card h-100 text-center p-4">
          <img
            src={imgForTest}
            className="card-img-top"
            height="250px"
            width="250px"
          />
          <div className="card-body">
            <h5 className="card-title">
              Hii fjkehkrhfuoh cxiubvdsoigdhicoxn dsiufhieuahuxkvnjcx
            </h5>
            <p className="card-text lead fw-bold">$500</p>
            <Link
              to={"/products/"}
              className="btn btn-outline-dark"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Home;
