import { Link, useLocation, useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getcategory } from "../Redux/GetcategorySlice";
import { productApi } from "../Redux/productSlice";

const Ourproducts = () => {
  const [showFilterContent, setShowFilterContent] = useState(false);

  const toggleFilterContent = () => {
    setShowFilterContent(!showFilterContent);
  };
  const product = useSelector(
    (state) => state.product.user?.document
  );
  console.log(product);
  const navigate = useNavigate()
  const location = useLocation()
  const id = location.state?._id
  console.log(location.state?._id);
  console.log(id);
  const getcategories = useSelector(
    (state) => state.Getcategory.data?.document || []
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcategory());
    dispatch(productApi(id))
  }, [dispatch]);

  const productDetails = (item) => {
    console.log(item);
    navigate("/productdetails", { state: { item, _id: item._id } });
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main id="content">
      <section className="inner-banner">
        <div className="container">
          <Slider {...settings}>
            {getcategories.map((item, id) => {
              return (
                <Animated
                  animationOut="fadeInUp"
                  animationIn="fadeInUp"
                  isVisible={true}>
                  <div className="inner-box-collection">
                    <Link to="/ourproducts" className="d-block item">
                      <img src={item.category_box_image.replace(
                        "http://localhost:5000",
                        "https://kmchoksi.onrender.com"
                      )} alt="collection 01" />
                      <h4>{item.name}</h4>
                    </Link>
                  </div>
                </Animated>
              )
            })}
          </Slider>
        </div>
      </section>
      <section className="pt-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-5">Wedding Rings</h2>
            </div>
            <div className="col-lg-6 mb-5 text-right">
              <button
                type="button"
                className="filter-btn"
                onClick={toggleFilterContent}>
                <i className="far fa-align-left" /> Filter
              </button>
            </div>
            <div
              className={`canvas-sidebar filter-canvas ${
                showFilterContent ? "show" : ""
              }`}>
              <form className="h-100">
                <div className="card border-0 pt-5 pb-8 pb-sm-13 h-100">
                  <div className="px-6 pl-sm-8 text-right">
                    <span
                      className="canvas-close d-inline-block text-right fs-24 mb-1 ml-auto lh-1 text-primary"
                      onClick={toggleFilterContent}>
                      <i className="fal fa-times" />
                    </span>
                  </div>
                  <div className="card-header bg-transparent py-0 px-6 px-sm-8 border-bottom">
                    <h3 className="fs-30 mb-5">Filter by</h3>
                    <p className="fs-15 text-primary mb-3">25 Products</p>
                  </div>
                  <div className="card-body px-6 px-sm-8 pt-7 overflow-y-auto">
                    <div className="card border-0 mb-7">
                      <div className="card-header bg-transparent border-0 p-0">
                        <h3 className="card-title fs-20 mb-0">Categories</h3>
                      </div>
                      <div className="card-body px-0 pt-4 pb-0">
                        <ul className="list-unstyled mb-0">
                          {getcategories &&
                            getcategories.map((data) => (
                              <li className="mb-1">
                                <Link
                                  to="/ourproducts"
                                  className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                                  {data.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="card border-0 mb-7">
                      <div className="card-header bg-transparent border-0 p-0">
                        <h3 className="card-title fs-20 mb-0">Gender</h3>
                      </div>
                      <div className="card-body px-0 pt-4 pb-0">
                        <ul className="list-unstyled mb-0">
                          <li className="mb-1">
                            <Link
                              to="#"
                              className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                              Men
                            </Link>
                          </li>
                          <li className="mb-1">
                            <Link
                              to="#"
                              className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                              Women
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card border-0 mb-7 widget-color">
                      <div className="card-header bg-transparent border-0 p-0">
                        <h3 className="card-title fs-20 mb-0">Colors</h3>
                      </div>
                      <div className="card-body px-0 pt-4 pb-0">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#d0a272" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#68412d" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#000000" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#aa5959" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#8db4d2" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#c2c3a0" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#c7857d" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#e3e1e7" }}
                            />
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="d-block item"
                              style={{ backgroundColor: "#b490b0" }}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-0 bg-transparent pt-5 px-8">
                    <div className="row no-gutter mx-n2">
                      <div className="col-sm-6 px-2 mb-2 mb-sm-0">
                        <Link
                          to="#"
                          className="btn btn-primary btn-block letter-spacing-05 text-uppercase">
                          apply
                        </Link>
                      </div>
                      <div className="col-sm-6 px-2">
                        <Link
                          to="#"
                          className="btn btn-outline-primary btn-block letter-spacing-05 text-uppercase">
                          clear
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row mb-4 overflow-hidden">
            {Array.isArray(product) && product?.map((item, i) => {              
              const backgroundImageUrl = `https://kmchoksi.onrender.com/${item.product_image[0]}`;             
              return (
                <div
                  className="col-6 col-sm-6 col-lg-3 mb-8"
                  animationOut="fadeInUp"
                  animationIn="fadeInUp"
                  isVisible={true}>
                  <div className="card border-0 hover-change-content product">
                    <div className="card-img-top position-relative">
                      <span onClick={() => productDetails(item)}>
                        <div
                          // style={{ backgroundImage: 'url("images/product-19.jpg")' }}
                          // style={{
                          //   backgroundImage: `url(${item.product_image.replace(
                          //     "http://localhost:5000",
                          //     "https://kmchoksi.onrender.com"
                          //   )
                          //     }`
                          // }}
                          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                          className="card-img ratio bg-img-cover-center ratio-1-1"></div></span>
                      <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          title="Whatsapp"
                          className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                          <i className="fab fa-whatsapp" />
                        </Link>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          title="Enquire Now"
                          className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                          <i className="fal fa-envelope-open-text" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                      <div className="mr-auto">
                        <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                          {item.name}
                        </p>
                        <p className="font-weight-bold text-muted d-block mb-0">
                          {item.gender} | Finger Ring | {item.gold_purity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}
          </div>
            {/* <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <Link to="/productdetails"> <div
                    style={{ backgroundImage: 'url("images/product-19.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div></Link>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-02.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-10.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-04.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-16.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-04.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-06.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-05.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-08.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-09.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-18.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-13.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{
                      backgroundImage: 'url("images/product-05_1.jpg")',
                    }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-07.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-09.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated>
            <Animated
              className="col-6 col-sm-6 col-lg-3 mb-8"
              animationOut="fadeInUp"
              animationIn="fadeInUp"
              isVisible={true}>
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-15.jpg")' }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Whatsapp"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link
                      to="#"
                      data-toggle="tooltip"
                      title="Enquire Now"
                      className="d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border">
                      <i className="fal fa-envelope-open-text" />
                    </Link>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <p className="letter-spacing-05 d-block font-weight-500 mb-1">
                      Bold Glint Diamond Ring
                    </p>
                    <p className="font-weight-bold text-muted d-block mb-0">
                      Unisex | Finger Ring | 22 Karat
                    </p>
                  </div>
                </div>
              </div>
            </Animated> */}
          {/* </div> */}
          {/* <div className="canvas-sidebar filter-canvas">
            <div className="canvas-overlay"></div>
            <form className="h-100">
              <div className="card border-0 pt-5 pb-8 pb-sm-13 h-100">
                <div className="px-6 pl-sm-8 text-right">
                  <span className="canvas-close d-inline-block text-right fs-24 mb-1 ml-auto lh-1 text-primary">
                    <i className="fal fa-times" />
                  </span>
                </div>
                <div className="card-header bg-transparent py-0 px-6 px-sm-8 border-bottom">
                  <h3 className="fs-30 mb-5">Filter by</h3>
                  <p className="fs-15 text-primary mb-3">25 Products</p>
                </div>
                <div className="card-body px-6 px-sm-8 pt-7 overflow-y-auto">
                  <div className="card border-0 mb-7">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h3 className="card-title fs-20 mb-0">Categories</h3>
                    </div>
                    <div className="card-body px-0 pt-4 pb-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Earring
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Ring
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Mangalsutra
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Braceletes
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Kadas
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Chain
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Pendant
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Diamond
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-7">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h3 className="card-title fs-20 mb-0">Gender</h3>
                    </div>
                    <div className="card-body px-0 pt-4 pb-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Men
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="#"
                            className="text-secondary hover-primary border-bottom border-white border-hover-primary d-inline-block lh-12">
                            Women
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-7 widget-color">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h3 className="card-title fs-20 mb-0">Colors</h3>
                    </div>
                    <div className="card-body px-0 pt-4 pb-0">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#d0a272" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#68412d" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#000000" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#aa5959" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#8db4d2" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#c2c3a0" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#c7857d" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#e3e1e7" }}
                          />
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="#"
                            className="d-block item"
                            style={{ backgroundColor: "#b490b0" }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0 bg-transparent pt-5 px-8">
                  <div className="row no-gutter mx-n2">
                    <div className="col-sm-6 px-2 mb-2 mb-sm-0">
                      <Link
                        to="#"
                        className="btn btn-primary btn-block letter-spacing-05 text-uppercase">
                        apply
                      </Link>
                    </div>
                    <div className="col-sm-6 px-2">
                      <Link
                        to="#"
                        className="btn btn-outline-primary btn-block letter-spacing-05 text-uppercase">
                        clear
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Ourproducts;
