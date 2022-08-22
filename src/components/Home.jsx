import React from "react";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner5 from "../assets/banner5.jpeg";
import imgForTest from "../assets/testHome1.jpeg";
import { Carousel, Card, Image } from "antd";
import "../scss/home.scss";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
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
              <Link to={"/products/"} className="btn btn-outline-dark">
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
              <Link to={"/products/"} className="btn btn-outline-dark">
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
              <Link to={"/products/"} className="btn btn-outline-dark">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
