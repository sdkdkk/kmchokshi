import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Animated } from "react-animated-css";
import { homeslider } from "../Redux/GethomeSliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { brandlogo } from "../Redux/GetbrandlogoSlice";
import { collectionbanner } from "../Redux/GetcollectionbannerSlice";
import { boximage } from "../Redux/GetboximageSlice";
import { Getabout } from "../Redux/GetaboutSlice";
import { testimonialmaster } from "../Redux/GettestimonialSlice";
import { homevideo } from "../Redux/GethomevideoSlice";

const Home = () => {
  const homesliders = useSelector(
    (state) => state.GethomeSlider.data?.document || []
  );
  const brandlogos = useSelector(
    (state) => state.getbrandlogo.data?.document || []
  );

  const collectionbanners = useSelector(
    (state) => state.collectionbanner.data?.document || []
  );

  const boximages = useSelector(
    (state) => state.getboximage.data?.document || []
  );

  const Getabouts = useSelector((state) => state.Getabout.data?.document || []);

  const Gettestimonials = useSelector(
    (state) => state.Gettestimonial.data?.document || []
  );

  const homevideos = useSelector(
    (state) => state.Gethomevideo.data?.document || []
  );

  console.log(homevideos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeslider());
    dispatch(brandlogo());
    dispatch(collectionbanner());
    dispatch(boximage());
    dispatch(Getabout());
    dispatch(testimonialmaster());
    dispatch(homevideo());
  }, [dispatch]);

  useEffect(() => {}, []);

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

  const settings2 = {
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    arrows: true,
  };

  return (
    <main id="content">
      <section>
        <Slider
          className="slick-slider slick-dots-light dots-inner-center"
          {...settings}>
          {homesliders &&
            homesliders.map(
              (data) =>
                data.isActive && (
                  <div className="box" key={data.id}>
                    <div className="d-flex flex-column">
                      <img
                        src={data.slider_image.replace(
                          "http://localhost:5000",
                          "https://kmchoksi.onrender.com"
                        )}
                        alt=""
                      />
                    </div>
                  </div>
                )
            )}
        </Slider>
      </section>
      <section className="pb-8 pt-10">
        <div className="container border-bottom pb-8 pb-lg-8">
          <h1 className="text-center mb-5 fs-30">KM CHOKSI COLLECTION</h1>
          <div className="d-flex flex-wrap client-logo-02 justify-content-center">
            {collectionbanners &&
              collectionbanners.map((data) =>
                data.isActive ? (
                  <Animated
                    animationOut="fadeInLeft"
                    animationIn="fadeInLeft"
                    isVisible={true}
                    to="#"
                    className="d-block item "
                    key={data.id}>
                    <img
                      src={data.collection_image.replace(
                        "http://localhost:5000",
                        "https://kmchoksi.onrender.com"
                      )}
                      alt="collection 01"
                    />
                    <h4>{data.title}</h4>
                  </Animated>
                ) : null
              )}
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
                to="#"
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
                to="#"
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
                to="#"
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
                to="#"
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
                to="#"
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
                to="#"
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
          {Getabouts &&
            Getabouts.map((data) =>
              data.isActive ? (
                <div className="row align-items-center" key={data.id}>
                  <Animated
                    animationOut="fadeInLeft"
                    animationIn="fadeInLeft"
                    isVisible={true}
                    className="col-md-6 mb-6 mb-md-0 pl-lg-17 pl-md-4">
                    <div className="mxw-405px pl-md-2">
                      <h2 className="fs-30 mb-5 lh-12">{data.title}</h2>
                      <p className="mb-7 font-weight-500 text-justify">
                        {data.description}
                      </p>
                      <Link
                        to="/history"
                        className="btn btn-outline-primary text-uppercase letter-spacing-05">
                        About Us
                      </Link>
                    </div>
                  </Animated>
                  <Animated
                    animationOut="fadeInRight"
                    animationIn="fadeInRight"
                    isVisible={true}
                    className="col-md-6 parralax-images">
                    <div className="row">
                      <div className="col-6 col-lg-6 pb-5">
                        <img
                          src={data.logo_image.replace(
                            "http://localhost:5000",
                            "https://kmchoksi.onrender.com"
                          )}
                          alt="collection 01"
                        />
                      </div>
                      <div className="col-6 col-lg-6 pb-5">
                        <img
                          src={data.image.replace(
                            "http://localhost:5000",
                            "https://kmchoksi.onrender.com"
                          )}
                          alt="collection 01"
                        />
                      </div>
                    </div>
                  </Animated>
                </div>
              ) : null
            )}
        </div>
      </section>

      <section className="pt-8 pb-10 border-bottom">
        <div className="container">
          <Slider {...settings1}>
            {brandlogos &&
              brandlogos.map(
                (data) =>
                  data.isActive && (
                    <div className="box">
                      <Link to="#" className="d-block">
                        <img
                          src={data.brand_image.replace(
                            "http://localhost:5000",
                            "https://kmchoksi.onrender.com"
                          )}
                          alt=""
                          width="50"
                          height="50"
                        />
                      </Link>
                    </div>
                  )
              )}
          </Slider>
        </div>
      </section>
      <section className="pt-10 pb-8">
        <div className="container-fluid">
          <div className="row">
            <Animated
              animationOut="fadeInLeft"
              animationIn="fadeInLeft"
              isVisible={true}
              className="col-lg-6 text-center brand-bg mb-5"
              data-animate="fadeInLeft">
              <img
                className="w-100"
                src="images/brands/brand-img.jpg"
                alt="brand"
              />
            </Animated>
            <div className="col-lg-6">
              <div className="pl-sm-10 pl-sm-0 d-flex flex-column justify-content-center align-i-center h-100">
                <h2 className="fs-34 mb-0">KANYADAN</h2>
                <h3 className="fs-24 mb-3">PURE WEDDING COLLECTION</h3>
                <p className="mb-7 font-weight-500">
                  A bespoke collection to shine like no other on your special
                  day
                </p>
                <div>
                  <Link
                    to="/productdetails"
                    className="btn btn-outline-primary text-uppercase letter-spacing-05">
                    EXPLORE THE COLLECTION
                  </Link>
                </div>
              </div>
            </div>
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
              <div className="pr-sm-10 d-flex flex-column justify-content-center h-100 text-lg-right align-i-center">
                <h2 className="fs-34 mb-0">KANYADAN</h2>
                <h3 className="fs-24 mb-3">PURE WEDDING COLLECTION</h3>
                <p className="mb-7 font-weight-500">
                  A bespoke collection to shine like no other on your special
                  day
                </p>
                <div>
                  <Link
                    to="/productdetails"
                    className="btn btn-outline-primary text-uppercase letter-spacing-05">
                    EXPLORE THE COLLECTION
                  </Link>
                </div>
              </div>
            </Animated>
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
            {homevideos &&
              homevideos.map((data, index) =>
                data.isActive ? (
                  <div
                    className="col-6 col-sm-6 col-lg-3 mb-4 mb-lg-0"
                    key={index}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.videoCode.replace(
                          'width="560" height="315"',
                          'width="100%" height="500" autoplay muted'
                        ),
                      }}
                    />
                  </div>
                ) : null
              )}
          </div>
        </div>
      </section>

      <section className="pb-12 pb-lg-15 pt-2">
        <div className="container">
          <h2 className="fs-30 mb-8 text-center">HAPPY CLIENTS</h2>
          <Slider {...settings2}>
            {Gettestimonials &&
              Gettestimonials.map(
                (data) =>
                  data.isActive && (
                    <div className="box" key={data.id}>
                      <div className="card border-0">
                        <div className="card-body px-3 py-0 text-center">
                          <div className="mxw-84px mb-6 mx-auto">
                            <img
                              src={data.testimonial_image.replace(
                                "http://localhost:5000",
                                "https://kmchoksi.onrender.com"
                              )}
                              alt="Sampson Totton"
                              className="gettestimonials"
                            />
                          </div>
                          <ul className="list-inline mb-4">
                            {Array.from({ length: data.rating }).map(
                              (_, index) => (
                                <li
                                  key={index}
                                  className="list-inline-item fs-14 text-primary mr-0">
                                  <i className="fas fa-star" />
                                </li>
                              )
                            )}
                            {Array.from({ length: 5 - data.rating }).map(
                              (_, index) => (
                                <li
                                  key={index}
                                  className="list-inline-item fs-14 text-primary mr-0">
                                  <i className="far fa-star" />
                                </li>
                              )
                            )}
                          </ul>
                          <p className="card-text mb-4 font-weight-500">
                            {data.message}
                          </p>
                          <p className="card-text text-primary font-weight-bold mb-1 fs-15">
                            {data.name}
                          </p>
                          <p className="card-text text-muted fs-13 text-uppercase letter-spacing-05 font-weight-500">
                            {data.city}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )}
          </Slider>
        </div>
      </section>

      <section className="py-10 instagram-bg">
        <div className="container container-xxl">
          <h4 className="fs-18 text-center">Follow us on Instagram</h4>
          <h1 className="fs-30 mb-8 text-center">k_m_ choksi_official</h1>
          <div className="row no-gutters">
            {boximages &&
              boximages.map((data) =>
                data.isActive ? (
                  <div
                    className="col-6 col-sm-6 col-lg-3 mb-6 mb-lg-0"
                    key={data.id}>
                    <img
                      src={data.box_image.replace(
                        "http://localhost:5000",
                        "https://kmchoksi.onrender.com"
                      )}
                      alt=""
                    />
                  </div>
                ) : null
              )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
