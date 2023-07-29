import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

const Ourbrands = () => {
  return (
    <main id="content">
      <section className="inner-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="inner-banner-text">
                <h1>Our Brands</h1>
                <p>The Wedding Jewellery</p>
              </div>
            </div>
            <div className="col-lg-10">
              <img
                className="w-100 inner-banner-img"
                src="images/brands/banner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-12">
        <div className="container-fluid">
          <div className="row ">
            <Animated
              animationOut="fadeInLeft"
              animationIn="fadeInLeft"
              isVisible={true}
              className="col-lg-6 text-center brand-bg mb-5">
              <img
                className="w-100"
                src="images/brands/brand-img.jpg"
                alt="brand"
              />
            </Animated>
            <Animated
              animationOut="fadeInRight"
              animationIn="fadeInRight"
              isVisible={true}
              className="col-lg-6">
              <div className="pl-sm-10 pl-sm-0 d-flex flex-column justify-content-center align-i-center h-100">
                <div className="brand-logo">
                  <img src="images/brands/brand-1.jpg" alt="" />
                </div>
                <h2 className="fs-34 mb-0">KANYADAN</h2>
                <h3 className="fs-24 mb-3">PURE WEDDING COLLECTION</h3>
                <p className="mb-7 font-weight-500">
                  A bespoke collection to shine like no other on your special
                  day
                </p>
                <div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary text-uppercase letter-spacing-05">
                    EXPLORE THE COLLECTION
                  </Link>
                </div>
              </div>
            </Animated>
          </div>
          <div className="row pt-8 flex-md-row-reverse">
            <Animated
              animationOut="fadeInRight"
              animationIn="fadeInRight"
              isVisible={true}
              className="col-lg-6 text-center brand-bg mb-5">
              <img
                className="w-100"
                src="images/brands/brand-img01.jpg"
                alt="brand"
              />
            </Animated>
            <Animated
              animationOut="fadeInLeft"
              animationIn="fadeInLeft"
              isVisible={true}
              className="col-lg-6">
              <div className="pr-sm-10 d-flex flex-column justify-content-center align-i-center h-100 text-lg-right">
                <div className="brand-logo">
                  <img src="images/brands/brand-1.jpg" alt="" />
                </div>
                <h2 className="fs-34 mb-0">KANYADAN</h2>
                <h3 className="fs-24 mb-3">PURE WEDDING COLLECTION</h3>
                <p className="mb-7 font-weight-500">
                  A bespoke collection to shine like no other on your special
                  day
                </p>
                <div>
                  <Link
                    to="shop-page-06.html"
                    className="btn btn-outline-primary text-uppercase letter-spacing-05">
                    EXPLORE THE COLLECTION
                  </Link>
                </div>
              </div>
            </Animated>
          </div>
          <div className="row pt-8">
            <Animated
              animationOut="fadeInLeft"
              animationIn="fadeInLeft"
              isVisible={true}
              className="col-lg-6 text-center brand-bg mb-5">
              <img
                className="w-100"
                src="images/brands/brand-img.jpg"
                alt="brand"
              />
            </Animated>
            <Animated
              animationOut="fadeInRight"
              animationIn="fadeInRight"
              isVisible={true}
              className="col-lg-6">
              <div className="pl-sm-10 pl-sm-0 d-flex flex-column justify-content-center align-i-center h-100">
                <div className="brand-logo">
                  <img src="images/brands/brand-1.jpg" alt="" />
                </div>
                <h2 className="fs-34 mb-0">KANYADAN</h2>
                <h3 className="fs-24 mb-3">PURE WEDDING COLLECTION</h3>
                <p className="mb-7 font-weight-500">
                  A bespoke collection to shine like no other on your special
                  day
                </p>
                <div>
                  <Link
                    to="#"
                    className="btn btn-outline-primary text-uppercase letter-spacing-05">
                    EXPLORE THE COLLECTION
                  </Link>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ourbrands;
