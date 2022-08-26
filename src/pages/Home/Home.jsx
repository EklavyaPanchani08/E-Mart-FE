import React from "react";
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpeg";
import banner5 from "../../assets/banner5.jpeg";
import cartImg1 from "../../assets/home-cart-1.jpeg";
import cartImg2 from "../../assets/home-cart-2.jpeg";
import cartImg3 from "../../assets/home-cart-3.jpeg";
import serviceImg1 from "../../assets/service-img-1.png";
import serviceImg2 from "../../assets/service-img-2.png";
import serviceImg3 from "../../assets/service-img-3.png";
import productImg from '../../assets/home-product-test.jpeg'
import { Carousel, Card, Image } from "antd";
import "./home.scss";
import "../../scss/button.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="cart-section py-5">
        <div className="container">
          <div className="d-flex mx-auto align-items-center text-center">
            <div className="card h-100 text-center card-img border-0">
              <img
                src={cartImg1}
                className="card-img-top"
              />
              <div className="mt-3 text-left" style={{ width: '350px ' }}>
                <h5 className="text-white">MEN'S COLLATION</h5>
                <p className="text-white mx-2">See our top-picks for jean jackets that are oversized, distressed, and downright cool.</p>
                <button className="my-btn theme-btn cart-btn">See All</button>
              </div>
            </div>
            <div className="card h-100 text-center card-img  border-0">
              <img
                src={cartImg2}
                className="card-img-top"
              />
              <div className="mt-3 text-left" style={{ width: '350px ' }}>
                <h5 className="text-white">WOMEN'S COLLATION</h5>
                <p className="text-white mx-2">See our top-picks for jean jackets that are oversized, distressed, and downright cool.</p>
                <button className="my-btn theme-btn cart-btn">See All</button>
              </div>
            </div>
            <div className="card h-100 text-center card-img  border-0">
              <img
                src={cartImg3}
                className="card-img-top"
              />
              <div className="mt-3 text-left" style={{ width: '350px ' }}>
                <h5 className="text-white">CHILDREN'S COLLATION</h5>
                <p className="text-white mx-2">See our top-picks for jean jackets that are oversized, distressed, and downright cool.</p>
                <button className="my-btn theme-btn cart-btn">See All</button>
              </div>
            </div>
          </div>
          <hr className="my-5 text-white" />
          <div className="row  text-center">
            <div className="col-md-4">
              <img width='35px' src={serviceImg1} alt="" />
              <h6 className="mt-4 text-white">30 DAYS RETURN</h6>
              <p className="text-white">Simply return it within 30 days for an exchange.</p>
            </div>
            <div className="col-md-4">
              <img width='50px' src={serviceImg2} alt="" />
              <h6 className="mt-4 text-white">FREE US DELIVERY</h6>
              <p className="text-white">On orders over $200!</p>
            </div>
            <div className="col-md-4">
              <img width='35px' src={serviceImg3} alt="" />
              <h6 className="mt-4 text-white">Calling Support</h6>
              <p className="text-white">Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h1 className="text-center mb-3 display-6">Modern Collections</h1>
        <div className="row all-product-home">
          <div className="col-lg-4 mb-2 product-cart">
            <div className="product-img">
              <img src={productImg} className="product-img" alt="alt from be side" />
            </div>
            <div className="mt-3 text-left">
              <p className=" mb-1 ">Gover T-Shirt</p>
              <p className="">$490.00</p>
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
          <div className="col-lg-4 mb-2 product-cart">
            <div className="product-img">
              <img src={productImg} className="product-img" alt="alt from be side" />
            </div>
            <div className="mt-3 card-body product-price-name text-center">
              <h5 className=" mb-2">Gover T-Shirt</h5>
              <h6 className="">$490.00</h6>
            </div>
          </div>
          <div className="col-lg-4 mb-2 product-cart">
            <div className="product-img">
              <img src={productImg} className="product-img" alt="alt from be side" />
            </div>
            <div className="mt-3 card-body product-price-name text-center">
              <h5 className=" mb-2">Gover T-Shirt</h5>
              <h6 className="">$490.00</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
