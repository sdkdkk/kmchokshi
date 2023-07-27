import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel/slick/slick";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Home = () => {
  useEffect(() => {
    // You don't need the Slick initialization code here
    // react-slick handles it for you.
  }, []);

  const settings = {
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    dots: true,
    arrows: false,
  };
  const settings1 = {
    slidesToShow: 5,
    infinite: true,
    autoplay: false,
    arrows: false,
  };
  return (
    <main id="content">
      <section >
        <Slider
          className="slick-slider slick-dots-light dots-inner-center"
          {...settings}>
          <div className="box">
            <div className="d-flex flex-column">
              <img className="desktop" src="images/slider/01.jpg" alt="" />
              {/* <img className="mobile" src="images/slider/mobile01.jpg" alt="" /> */}
            </div>
          </div>
          <div className="box">
            <div className="d-flex flex-column">
              <img className="desktop" src="images/slider/02.jpg" alt="" />
              {/* <img className="mobile" src="images/slider/mobile02.jpg" alt="" /> */}
            </div>
          </div>
          <div className="box">
            <div className="d-flex flex-column">
              <img className="desktop" src="images/slider/03.jpg" alt="" />
              {/* <img className="mobile" src="images/slider/mobile03.jpg" alt="" /> */}
            </div>
          </div>
        </Slider>
      </section>
      <section className="pb-8 pt-10">
        <div className="container border-bottom pb-8 pb-lg-8">
          <h1 className="text-center mb-5 fs-30">KM CHOKSI COLLECTION</h1>
          <div className="d-flex flex-wrap client-logo-02 justify-content-center">
            <Link href="#" className="d-block item animate-fade-in">
              <img src="images/collection/01.jpg" alt="collection 01" />
              <h4>Gold Coins</h4>
            </Link>
            <Link href="#" className="d-block item" >
              <img src="images/collection/02.jpg" alt="collection Logo 02" />
              <h4>Earrings</h4>
            </Link>
            <Link href="#" className="d-block item">
              <img src="images/collection/03.jpg" alt="collection Logo 03" />
              <h4>Pendants</h4>
            </Link>
            <Link href="#" className="d-block item" >
              <img src="images/collection/04.jpg" alt="collection Logo 04" />
              <h4>Finger Rings</h4>
            </Link>
            <Link href="#" className="d-block item">
              <img src="images/collection/05.jpg" alt="collection Logo 05" />
              <h4>Mangalsutras</h4>
            </Link>
            <Link href="#" className="d-block item">
              <img src="images/collection/06.jpg" alt="collection Logo 06" />
              <h4>Neckwear</h4>
            </Link>
            <Link href="#" className="d-block item" >
              <img src="images/collection/07.jpg" alt="collection Logo 07" />
              <h4>Wedding Rings</h4>
            </Link>
            <Link href="#" className="d-block item" >
              <img src="images/collection/08.jpg" alt="collection Logo 08" />
              <h4>Chains</h4>
            </Link>
            <Link href="#" className="d-block item" >
              <img src="images/collection/09.jpg" alt="collection Logo 09" />
              <h4>Bangles</h4>
            </Link>
            <Link href="#" className="d-block item" >
              <img src="images/collection/10.jpg" alt="collection Logo 10" />
              <h4>Bracelets</h4>
            </Link>
            <Link href="#" className="d-block item" >
              <img src="images/collection/11.jpg" alt="collection Logo 11" />
              <h4>Nose Pins</h4>
            </Link>
            <Link href="#" className="d-block item">
              <img src="images/collection/12.jpg" alt="collection Logo 12" />
              <h4>Pendant Sets</h4>
            </Link>
          </div>
        </div>
      </section>
      <section className="pb-10">
        <div className="container">
          <h1 className="text-center mb-7 fs-30">
            GOLD &amp; DIAMOND JEWELLERY PRODUCTS
          </h1>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <Link
                href="#"
                className="card border-0 hover-shine hover-change-content">
                <img
                  src="images/collection/banner01.jpg"
                  alt="collection"
                  className="card-img"
                />
              </Link>
            </div>
            <div className="col-lg-4 mb-5">
              <Link
                href="#"
                className="card border-0 hover-shine hover-change-content">
                <img
                  src="images/collection/banner02.jpg"
                  alt="collection"
                  className="card-img"
                />
              </Link>
            </div>
            <div className="col-lg-4 mb-5">
              <Link
                href="#"
                className="card border-0 hover-shine hover-change-content">
                <img
                  src="images/collection/banner03.jpg"
                  alt="collection"
                  className="card-img"
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mb-5">
              <Link
                href="#"
                className="card border-0 hover-shine hover-change-content">
                <img
                  src="images/collection/banner04.jpg"
                  alt="collection"
                  className="card-img"
                />
              </Link>
            </div>
            <div className="col-lg-6 mb-5">
              <Link
                href="#"
                className="card border-0 hover-shine hover-change-content">
                <img
                  src="images/collection/banner05.jpg"
                  alt="collection"
                  className="card-img"
                />
              </Link>
            </div>
            <div className="col-lg-3 mb-5">
              <Link
                href="#"
                className="card border-0 hover-shine hover-change-content">
                <img
                  src="images/collection/banner06.jpg"
                  alt="collection"
                  className="card-img"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-sm-8">
        <div className="container container-xxl">
          <h4 className="text-lg-center sub-title">story of</h4>
          <h1 className="text-lg-center mb-7 fs-30">K M CHOKSI JEWELLERS</h1>
          <div className="row align-items-center ">
            <div
              className="col-md-6 mb-6 mb-md-0 pl-lg-17 pl-md-4"
             >
              <div className="mxw-405px pl-md-2">
                <h2 className="fs-30 mb-5 lh-12">ABOUT US</h2>
                <p className="mb-7 font-weight-500">
                  Building a legacy brand in the jewellery business is a
                  lifelong pursuit. It requires a deeply conscious understanding
                  of your customer and their needs; boundless creativity to
                  craft ideas into tangible, joyful products and experiences;
                  and a spirit of inclusion that inspires and empowers everyone
                  along on the path. We now introduce you to our management
                  board that leads k m choksi jewellers, with clarity of purpose
                  and ambition to power ahead.
                </p>
                <Link
                  href="shop-page-04.html"
                  className="btn btn-outline-primary text-uppercase letter-spacing-05">
                  About Us
                </Link>
              </div>
            </div>
            <div className="col-md-6 parralax-images" >
              <div className="row">
                <div className="col-6 col-lg-6 pb-5">
                  <img src="images/about/about01.jpg" alt="about" />
                </div>
                <div className="col-6 col-lg-6 pb-5">
                  <img src="images/about/about02.jpg" alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 pb-10 border-bottom">
      <div className="container">
        <Slider {...settings1}>
          <div className="box">
            <Link href="#" className="d-block">
              <img src="images/brands/brand-1.jpg" alt="brand Logo 01" />
            </Link>
          </div>
          <div className="box">
            <Link href="#" className="d-block">
              <img src="images/brands/brand-2.jpg" alt="brand Logo 02" />
            </Link>
          </div>
          <div className="box">
            <Link href="#" className="d-block">
              <img src="images/brands/brand-1.jpg" alt="Client Logo 03" />
            </Link>
          </div>
          <div className="box">
            <Link href="#" className="d-block">
              <img src="images/brands/brand-2.jpg" alt="Client Logo 04" />
            </Link>
          </div>
          <div className="box">
            <Link href="#" className="d-block">
              <img src="images/brands/brand-1.jpg" alt="Client Logo 05" />
            </Link>
          </div>
          <div className="box">
            <Link href="#" className="d-block">
              <img src="images/brands/brand-2.jpg" alt="Client Logo 06" />
            </Link>
          </div>
        </Slider>
      </div>
    </section>
      <section className="pt-10 pb-8">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-6 text-center brand-bg mb-5"
             >
              <img
                className="w-100"
                src="images/brands/brand-img.jpg"
                alt="brand"
              />
            </div>
            <div className="col-lg-6" >
              <div className="pl-sm-10 pl-sm-0 d-flex flex-column justify-content-center align-i-center h-100">
                <h2 className="fs-34 mb-0">KANYADAN</h2>
                <h3 className="fs-24 mb-3">PURE WEDDING COLLECTION</h3>
                <p className="mb-7 font-weight-500">
                  A bespoke collection to shine like no other on your special
                  day
                </p>
                <div>
                  <Link
                    href="#"
                    className="btn btn-outline-primary text-uppercase letter-spacing-05">
                    EXPLORE THE COLLECTION
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-8 flex-md-row-reverse">
            <div
              className="col-lg-6 text-center brand-bg mb-5"
              >
              <img
                className="w-100"
                src="images/brands/brand-img01.jpg"
                alt="brand"
              />
            </div>
            <div className="col-lg-6" >
              <div className="pr-sm-10 d-flex flex-column justify-content-center h-100 text-lg-right align-i-center">
                <h2 className="fs-34 mb-0">KANYADAN</h2>
                <h3 className="fs-24 mb-3">PURE WEDDING COLLECTION</h3>
                <p className="mb-7 font-weight-500">
                  A bespoke collection to shine like no other on your special
                  day
                </p>
                <div>
                  <Link
                    href="shop-page-06.html"
                    className="btn btn-outline-primary text-uppercase letter-spacing-05">
                    EXPLORE THE COLLECTION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <img src="images/bottom-banner.jpg" alt="offer" />
        </div>
      </section>
      <section className="py-10 py-lg-10">
        <div className="container container-xxl">
          <h1 className="fs-30 mb-8 text-center">WATCH OUR VIDEO</h1>
          <div className="row">
            <div
              className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0"
              >
              <video autoPlay muted width="100%" controls loop>
                <source src="video/v0.mp4" type="video/mp4" />
              </video>
            </div>
            <div
              className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0"
              >
              <video autoPlay muted width="100%" controls loop>
                <source src="video/v01.mp4" />
              </video>
            </div>
            <div
              className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0"
              >
              <video autoPlay muted width="100%" controls loop>
                <source src="video/v02.mp4" />
              </video>
            </div>
            <div
              className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0"
              >
              <video autoPlay muted width="100%" controls loop>
                <source src="video/v03.mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 instagram-bg">
        <div className="container container-xxl">
          <h4 className="fs-18 text-center">Follow us on Instagram</h4>
          <h1 className="fs-30 mb-8 text-center">k_m_ choksi_official</h1>
          <div className="row no-gutters">
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/01.jpg" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/02.jpg" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/03.jpg" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/04.jpg" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/05.jpg" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/06.jpg" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/07.jpg" alt="" />
            </div>
            <div className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0">
              <img src="images/insta/08.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
