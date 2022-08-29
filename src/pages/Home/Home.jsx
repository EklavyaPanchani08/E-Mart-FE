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
import productImg from "../../assets/home-product-test.jpeg";
import productImgHover from "../../assets/home-product-test-hover.jpg";
import { Carousel, Card, Image } from "antd";
import "./home.scss";
import "../../scss/button.scss";
import { Link } from "react-router-dom";
import sliderScript from '../../Other_File/bootstrap.bundle.min.js'

const Home = () => {
  return (
    <div>
      <script src={sliderScript}></script>
      <div id="carouselExampleIndicators"className="carousel slide"data-bs-ride="carousel">
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
          <div className="carousel-item ">
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cart-section py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
                <div className="col-sm-4 mb-3 text-center order-0">
                  <img src={cartImg1} width="100%" />
                  <div className="mt-3 text-left">
                    <h5 className="text-white">MEN'S COLLATION</h5>
                    <p className="text-white mx-2">
                      See our top-picks for jean jackets that are oversized,
                      distressed, and downright cool.
                    </p>
                    <button className="my-btn theme-btn cart-btn">See All</button>
                  </div>
                </div>
                <div className="col-sm-4 mb-3 text-center border-0">
                  <img src={cartImg2} width="100%" />
                  <div className="mt-3 text-left">
                    <h5 className="text-white">WOMEN'S COLLATION</h5>
                    <p className="text-white mx-2">
                      See our top-picks for jean jackets that are oversized,
                      distressed, and downright cool.
                    </p>
                    <button className="my-btn theme-btn cart-btn">See All</button>
                  </div>
                </div>
                <div className="col-sm-4 mb-3 text-center border-0">
                  <img src={cartImg1} width="100%" />
                  <div className="mt-3 text-left">
                    <h5 className="text-white">CHILD'S COLLATION</h5>
                    <p className="text-white mx-2">
                      See our top-picks for jean jackets that are oversized,
                      distressed, and downright cool.
                    </p>
                    <button className="my-btn theme-btn cart-btn">See All</button>
                  </div>
                </div>
          </div>
          <hr className="my-5 text-white" />
          <div className="row  text-center">
            <div className="col-md-4">
              <img width="35px" src={serviceImg1} alt="" />
              <h6 className="mt-4 text-white">30 DAYS RETURN</h6>
              <p className="text-white">
                Simply return it within 30 days for an exchange.
              </p>
            </div>
            <div className="col-md-4">
              <img width="50px" src={serviceImg2} alt="" />
              <h6 className="mt-4 text-white">FREE US DELIVERY</h6>
              <p className="text-white">On orders over $200!</p>
            </div>
            <div className="col-md-4">
              <img width="35px" src={serviceImg3} alt="" />
              <h6 className="mt-4 text-white">Calling Support</h6>
              <p className="text-white">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h1 className="text-center mb-3 display-6">Modern Collections</h1>
        <div className="row justify-content-center all-product-home">
          <div className="col-lg-11">
            <div className="row mx-auto justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-2 product-cart">
                <div className="product-img">
                  <img src={productImg} className="main-img" alt="alt from be side" />
                  <img src={productImgHover} className="hover-img" alt="alt from be side" />
                  <div className="content">
                    <ul className="selection">
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#c3ff2c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: 'white' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff8080' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff922c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#494949' }}></a></li>
                    </ul>
                    <ul className="selection">
                      <li><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">XXL</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-left cart-body">
                  <p className=" mb-1 ">Gover T-Shirt</p>
                  <p className="">$490.00</p>
                  <button className="my-btn theme-btn" width="300px">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-2 product-cart">
                <div className="product-img">
                  <img src={productImg} className="main-img" alt="alt from be side" />
                  <img src={productImgHover} className="hover-img" alt="alt from be side" />
                  <div className="content">
                    <ul className="selection">
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#c3ff2c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: 'white' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff8080' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff922c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#494949' }}></a></li>
                    </ul>
                    <ul className="selection">
                      <li><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">XXL</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-left cart-body">
                  <p className=" mb-1 ">Gover T-Shirt</p>
                  <p className="">$490.00</p>
                  <button className="my-btn theme-btn" width="300px">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-2 product-cart">
                <div className="product-img">
                  <img src={productImg} className="main-img" alt="alt from be side" />
                  <img src={productImgHover} className="hover-img" alt="alt from be side" />
                  <div className="content">
                    <ul className="selection">
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#c3ff2c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: 'white' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff8080' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff922c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#494949' }}></a></li>
                    </ul>
                    <ul className="selection">
                      <li><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">XXL</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-left cart-body">
                  <p className=" mb-1 ">Gover T-Shirt</p>
                  <p className="">$490.00</p>
                  <button className="my-btn theme-btn" width="300px">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-2 product-cart">
                <div className="product-img">
                  <img src={productImg} className="main-img" alt="alt from be side" />
                  <img src={productImgHover} className="hover-img" alt="alt from be side" />
                  <div className="content">
                    <ul className="selection">
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#c3ff2c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: 'white' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff8080' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff922c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#494949' }}></a></li>
                    </ul>
                    <ul className="selection">
                      <li><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">XXL</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-left cart-body">
                  <p className=" mb-1 ">Gover T-Shirt</p>
                  <p className="">$490.00</p>
                  <button className="my-btn theme-btn" width="300px">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-2 product-cart">
                <div className="product-img">
                  <img src={productImg} className="main-img" alt="alt from be side" />
                  <img src={productImgHover} className="hover-img" alt="alt from be side" />
                  <div className="content">
                    <ul className="selection">
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#c3ff2c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: 'white' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff8080' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff922c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#494949' }}></a></li>
                    </ul>
                    <ul className="selection">
                      <li><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">XXL</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-left cart-body">
                  <p className=" mb-1 ">Gover T-Shirt</p>
                  <p className="">$490.00</p>
                  <button className="my-btn theme-btn" width="300px">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-2 product-cart">
                <div className="product-img">
                  <img src={productImg} className="main-img" alt="alt from be side" />
                  <img src={productImgHover} className="hover-img" alt="alt from be side" />
                  <div className="content">
                    <ul className="selection">
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#c3ff2c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: 'white' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff8080' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#ff922c' }}></a></li>
                      <li><a href="#" style={{ padding: '5px 14px', backgroundColor: '#494949' }}></a></li>
                    </ul>
                    <ul className="selection">
                      <li><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">XXL</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 text-left cart-body">
                  <p className=" mb-1 ">Gover T-Shirt</p>
                  <p className="">$490.00</p>
                  <button className="my-btn theme-btn" width="300px">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
