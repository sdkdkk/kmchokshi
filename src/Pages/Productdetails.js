// import { Link } from "react-router-dom";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import { Link, animateScroll as scroll } from "react-scroll";

const Productdetails = () => {

  // Get all image links
const imageLinks = document.querySelectorAll('.list-group-item');

// Add a click event listener to each link
imageLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    // Prevent the default link behavior (scrolling to an anchor)
    event.preventDefault();

    // Remove the "active" class from all links
    imageLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the "active" class to the clicked link
    this.classList.add('active');
  });
});


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {};

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
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
  }; const [selectedImage, setSelectedImage] = useState('images/product-page-17.jpg'); // Set an initial image

  // Function to handle image selection when a small image is clicked
  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <main id="content">
      <section className="pt-10 pb-lg-15 pb-11">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-7 mb-8 mb-md-0 position-relative pr-md-6 pr-lg-10">
              <div className="d-flex">
                <div className="d-flex">
                  <div id="list-dots" className="list-group product-image-dots dots-thumbs mr-2">
                    <Link
                      className="list-group-item list-group-item-action p-0 d-flex mb-2 w-80px rounded-0"
                      to="#gallery-1"
                      onClick={() => handleImageClick('images/product-page-17.jpg')} // Set the image URL for gallery-1
                    >
                      <img src="images/product-page-17-sm.jpg" alt="" />
                    </Link>
                    <Link
                      className="list-group-item list-group-item-action p-0 d-flex mb-2 w-80px rounded-0 "
                      to="#gallery-2"
                      onClick={() => handleImageClick('images/product-page-18.jpg')} // Set the image URL for gallery-2
                    >
                      <img src="images/product-page-18-sm.jpg" alt="" />
                    </Link>
                    <Link
                      className="list-group-item list-group-item-action p-0 d-flex mb-2 w-80px rounded-0 "
                      to="#gallery-3"
                      onClick={() => handleImageClick('images/product-page-17.jpg')} // Set the image URL for gallery-3
                    >
                      <img src="images/product-page-17-sm.jpg" alt="" />
                    </Link>
                  </div>

                  <div className="scrollspy-images ml-md-12">
                    {/* <img src={selectedImage} alt="" /> */}
                    <Link
                      to={"images/product-page-17.jpg"}
                      data-gtf-mfp="true"
                      // data-gallery-id={01}
                      className="d-block mb-2"
                      id="#gallery-1">
                      <img src={selectedImage} alt="" />
                    </Link>
                  </div>

                  {/* <div
                  id="list-dots"
                  className="list-group product-image-dots dots-thumbs mr-2">
                  <Link
                    className="list-group-item list-group-item-action p-0 d-flex mb-2 w-80px rounded-0"
                    to="#gallery-1"
                    id="gallery-1"
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <img src="images/product-page-17-sm.jpg" alt="" />
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action p-0 d-flex mb-2 w-80px rounded-0 "
                    to="#gallery-2"
                    id="gallery-2"
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <img src="images/product-page-18-sm.jpg" alt="" />
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action p-0 d-flex mb-2 w-80px rounded-0 "
                    to="#gallery-3"
                    id="gallery-3"
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <img src="images/product-page-17-sm.jpg" alt="" />
                  </Link>
                </div> */}
                  {/* <div className="scrollspy-images ml-md-12">
                  <Link
                    to="images/product-page-17.jpg"
                    data-gtf-mfp="true"
                    // data-gallery-id={01}
                    className="d-block mb-2"
                    id="#gallery-1">
                    <img src="images/product-page-17.jpg" alt="" />
                  </Link>
                  <Link
                    to="images/product-page-18.jpg"
                    data-gtf-mfp="true"
                    // data-gallery-id={02}
                    className="d-block mb-2"
                    id="#gallery-2">
                    <img src="images/product-page-18.jpg" alt="" />
                  </Link>
                  <Link
                    to="images/product-page-17.jpg"
                    data-gtf-mfp="true"
                      data-gallery-id="3"
                    className="d-block mb-2"
                    id="#gallery-3">
                    <img src="images/product-page-17.jpg" alt="" />
                  </Link>
                </div> */}
                </div>
              </div>
            </div>
            <div
              className="col-md-5 primary-summary summary-sticky"
              id="summary-sticky">
              <div className="primary-summary-inner">
                <h2 className="fs-28 mb-4">Bold Glint Diamond Ring</h2>
                <p className="mt-2 mb-6">
                  Celebrate the quirks and nuances of your bond with these
                  couple rings, crafted in 22 karat yellow gold! Comes in a set
                  of 2.
                </p>
                <ul className="list-unstyled border-top pt-5 mt-5">
                  <li className="row mb-2">
                    <span className="d-block col-3 text-primary font-weight-500 fs-15">
                      Finger Ring:
                    </span>
                    <span className="d-block col-9 fs-15">Unisex</span>
                  </li>
                  <li className="row mb-2">
                    <span className="d-block col-3 text-primary font-weight-500 fs-15">
                      Gold Purity:
                    </span>
                    <span className="d-block col-9 fs-15">22 Karat</span>
                  </li>
                  <li className="row mb-2">
                    <span className="d-block col-3 text-primary font-weight-500 fs-15">
                      Gross Weight:
                    </span>
                    <span className="d-block col-9 fs-15">10 Gm</span>
                  </li>
                  <li className="row mb-2">
                    <span className="d-block col-3 text-primary font-weight-500 fs-15">
                      Color:
                    </span>
                    <span className="d-block col-9 fs-15">Yellow gold</span>
                  </li>
                </ul>
                <div className="d-flex align-items-center flex-wrap mt-5">
                  <Link
                    to="#"
                    className="btn-whatsapp text-uppercase font-weight-bold letter-spacing-05 fs-14 mr-6">
                    <i className="fab fa-whatsapp" />
                    <span className="ml-1">Whatsapp Inquiry</span>
                  </Link>
                </div>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                  <div className="text-primary font-weight-500 fs-18 mb-4 mt-5">
                    Inquiry
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="Your Name*"
                        required=""
                        name="name"
                        {...register("name", {
                          required: true,
                        })}
                      />
                      {errors.name && (
                        <p className="error text-right text-danger">
                          Please Enter a Name
                        </p>
                      )}
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="Your Email*"
                        required=""
                        name="email"
                        {...register("email", {
                          required: true,
                        })}
                      />
                      {errors.email && (
                        <p className="error text-right text-danger">
                          Please Enter a Email
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile No.*"
                        required=""
                        name="mobileno"
                        {...register("mobileno", {
                          required: true,
                        })}
                      />
                      {errors.mobileno && (
                        <p className="error text-right text-danger">
                          Please Enter a Mobile No
                        </p>
                      )}
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Subject"
                        required=""
                        name="subject"
                        {...register("subject", {
                          required: true,
                        })}
                      />
                      {errors.mobileno && (
                        <p className="error text-right text-danger">
                          Please Enter a Subject
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      type="text"
                      className={`form-control ${
                        errors.comment ? "is-invalid" : ""
                      }`}
                      rows={6}
                      name="message"
                      {...register("message", {
                        required: "Please Enter a Message",
                      })}
                    />

                    {errors.message && (
                      <p className="error text-right text-danger">
                        Please Enter a Message
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary text-uppercase letter-spacing-05 w-100">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-11 pb-lg-15">
        <div className="container container-xxl">
          <h2 className="fs-28 mb-5 text-center">May You Like This</h2>
          <Slider {...settings} className="slick-slider">
            <div className="box">
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: 'url("images/product-19.jpg")' }}
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
            </div>
            <div className="box">
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
            </div>
            <div className="box">
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
            </div>
            <div className="box">
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
            </div>
            <div className="box">
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
            </div>
            <div className="box">
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
            </div>
            <div className="box">
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
            </div>
            <div className="box">
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
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Productdetails;
