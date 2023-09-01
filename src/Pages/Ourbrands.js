import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";
import { Allbrand } from "../Redux/GetallbrandSlice";

const Ourbrands = () => {
  const Allbrands = useSelector(
    (state) => state.Getallbrand.data?.document || []
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Allbrand());
  }, [dispatch]);
  console.log(Allbrands);

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
          {Allbrands && Allbrands.map((data,index)=>(
            <div className={`row pt-8 ${index % 2 === 0 ? '' : 'flex-md-row-reverse'}`} key={index}>
            <Animated
              animationOut="fadeInLeft"
              animationIn="fadeInLeft"
              isVisible={true}
              className="col-lg-6 text-center brand-bg mb-5">
                <img
                    src={data.category_logo_image.replace(
                      "http://localhost:5000",
                      "https://kmchoksi.onrender.com"
                    )}
                    alt=""
                  />
            </Animated>
            <Animated
              animationOut="fadeInRight"
              animationIn="fadeInRight"
              isVisible={true}
              className="col-lg-6">
              <div className="pl-sm-10 pl-sm-0 d-flex flex-column justify-content-center align-i-center h-100">
                <div className="brand-logo">
                <img
                    src={data.logo_image.replace(
                      "http://localhost:5000",
                      "https://kmchoksi.onrender.com"
                    )}
                    alt=""
                  />
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
          ))}
          
        </div>
      </section>
    </main>
  );
};

export default Ourbrands;
