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
import brandImg1 from "../../assets/brand-1.jpg";
import brandImg2 from "../../assets/brand-2.jpg";
import brandImg3 from "../../assets/brand-3.jpg";
import brandImg4 from "../../assets/brand-4.jpg";
import brandImg5 from "../../assets/brand-5.jpg";
import brandImg6 from "../../assets/brand-6.jpg";
import brandImg7 from "../../assets/brand-7.jpg";
import footerLogo from "../../assets/logo-white.png";
import productImgHover from "../../assets/home-product-test-hover.jpg";
import video from "../../assets/aboutVideo.mp4";
import { Carousel, Card, Image, Row, Col, Input } from "antd";
import "./home.scss";
import "../../scss/button.scss";
import { Link } from "react-router-dom";
import sliderScript from "../../Other_File/bootstrap.bundle.min.js";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const Home = () => {
  const trendingBrand = [
    {
      img: (
        <>
          <img src={brandImg1} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg2} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg3} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg4} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg5} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg6} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg7} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg1} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg2} width="130px" />
        </>
      ),
    },
    {
      img: (
        <>
          <img src={brandImg3} width="130px" />
        </>
      ),
    },
  ];
  return (
    <div>
      <script src={sliderScript}></script>
      {/* ======== SLIDER =======*/}
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

      {/*======= MIDDEL PRODUCTES SECTION ======= */}
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

      {/*====== Modern Collections ========*/}
      <div className="container py-5">
        <h1 className="text-center mb-3 display-6">Modern Collections</h1>
        <div className="row justify-content-center all-product-home">
          <div className="col-lg-11">
            <div className="row mx-auto justify-content-center">
              <div className="col-lg-4 col-sm-6 mb-2 product-cart">
                <div className="product-img">
                  <img
                    src={productImg}
                    className="main-img"
                    alt="alt from be side"
                  />
                  <img
                    src={productImgHover}
                    className="hover-img"
                    alt="alt from be side"
                  />
                  <div className="content">
                    <ul className="selection">
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#c3ff2c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "white",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff8080",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff922c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#494949",
                          }}
                        ></a>
                      </li>
                    </ul>
                    <ul className="selection">
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
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
                  <img
                    src={productImg}
                    className="main-img"
                    alt="alt from be side"
                  />
                  <img
                    src={productImgHover}
                    className="hover-img"
                    alt="alt from be side"
                  />
                  <div className="content">
                    <ul className="selection">
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#c3ff2c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "white",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff8080",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff922c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#494949",
                          }}
                        ></a>
                      </li>
                    </ul>
                    <ul className="selection">
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
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
                  <img
                    src={productImg}
                    className="main-img"
                    alt="alt from be side"
                  />
                  <img
                    src={productImgHover}
                    className="hover-img"
                    alt="alt from be side"
                  />
                  <div className="content">
                    <ul className="selection">
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#c3ff2c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "white",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff8080",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff922c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#494949",
                          }}
                        ></a>
                      </li>
                    </ul>
                    <ul className="selection">
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
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
                  <img
                    src={productImg}
                    className="main-img"
                    alt="alt from be side"
                  />
                  <img
                    src={productImgHover}
                    className="hover-img"
                    alt="alt from be side"
                  />
                  <div className="content">
                    <ul className="selection">
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#c3ff2c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "white",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff8080",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff922c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#494949",
                          }}
                        ></a>
                      </li>
                    </ul>
                    <ul className="selection">
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
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
                  <img
                    src={productImg}
                    className="main-img"
                    alt="alt from be side"
                  />
                  <img
                    src={productImgHover}
                    className="hover-img"
                    alt="alt from be side"
                  />
                  <div className="content">
                    <ul className="selection">
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#c3ff2c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "white",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff8080",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff922c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#494949",
                          }}
                        ></a>
                      </li>
                    </ul>
                    <ul className="selection">
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
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
                  <img
                    src={productImg}
                    className="main-img"
                    alt="alt from be side"
                  />
                  <img
                    src={productImgHover}
                    className="hover-img"
                    alt="alt from be side"
                  />
                  <div className="content">
                    <ul className="selection">
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#c3ff2c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "white",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff8080",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#ff922c",
                          }}
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            padding: "5px 14px",
                            backgroundColor: "#494949",
                          }}
                        ></a>
                      </li>
                    </ul>
                    <ul className="selection">
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                      <li>
                        <a href="#">XXL</a>
                      </li>
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

      {/*======= VIDEO & BRAND =======*/}
      <div className="py-5" style={{ background: "#F5F3EE" }}>
        <div className="container py-5">
          <div className="about mb-5">
            <div className="row align-items-center text-center">
              <div className="col-lg-10 mx-auto align-items-center text-center mb-5">
                <span>OUR STORY</span>
                <h2>
                  “Being perfectly well-dressed gives one a tranquillity that no
                  religion can bestow”
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan
                </p>
              </div>
            </div>
            <div className="text-center">
              <video controls autoplay className="about-video">
                <source src={video} type="video/mp4" />
              </video>
              <Link to="/about" className="my-btn theme-btn mt-2 px-5">
                About Us
              </Link>
            </div>
          </div>
          <hr />
          <div className="company text-center mt-5">
            <span>TRENDING BRANDS</span>
            <CarouselProvider
              className="mt-3"
              naturalSlideWidth={200}
              naturalSlideHeight={125}
              totalSlides={trendingBrand.length}
              visibleSlides={5}
              interval={2000}
              playDirection={"forward"}
              isPlaying={true}
              infinite={true}
            >
              <Slider>
                {trendingBrand.map((brand) => (
                  <Slide>{brand.img}</Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </div>
        </div>
      </div>

      {/*===== FOOTER =====*/}
      <div className="bg-black py-5 text-white">
        <div className="container">
          <Row className="align-content-center justify-content-center">
            <Col md={8} sm={24}>
              <img src={footerLogo} width="200px" alt="logo" />
              <p className="mb-1">We’re available by phone +123-456-789</p>
              <p className="mb-1">info@example.com</p>
              <p className="mb-1">Monday till Friday 10 to 6 EST</p>
            </Col>
            <Col md={8} sm={24}>
              <h3 className="text-white">Our Shop</h3>
              <p className="mb-2">new Arrivals</p>
              <p className="mb-2">Top Trending</p>
              <p className="mb-2">Autumn Collection</p>
              <p className="mb-2">Back in Stock</p>
              <p className="mb-2">Bikini Tops</p>
              <p className="mb-2">Denim Collection</p>
              <p className="mb-2"> Swimwear </p>
              <p className="mb-2">BottomsBikini</p>
            </Col>
            <Col md={8} sm={24}>
              <h3 className="text-white">Newsletter</h3>
              <p>
                Receive our weekly newsletter. For dietary content, fashion
                insider and the best offers
              </p>
              <Input placeholder="Email Address" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
