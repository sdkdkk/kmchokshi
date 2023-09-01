import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { branchmaster } from "../Redux/GetbranchmasterSlice";

const Storelocator = () => {
  const branchmasters = useSelector(
    (state) => state.branchmaster.data?.document || []
  );

  console.log(branchmasters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(branchmaster());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {};

  return (
    <main id="content">
      <section className="inner-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="inner-banner-text">
                <h1>Store Locator</h1>
                <p>K M Choksi</p>
              </div>
            </div>
            <div className="col-lg-10">
              <img
                className="w-100 inner-banner-img"
                src="images/contact/banner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-lg-10 pt-5 pb-10">
        <div className="container">
          {branchmasters &&
            branchmasters.map((data) => (
              <div className="row">
                <div className="col-lg-4 mb-6 d-flex align-items-center">
                  <div className="text-left px-5">
                    <h4 className="font-weight-bold mb-2">{data.city}</h4>
                    <p className="mb-3">{data.address}</p>
                    <p className=" mb-0">Contact : {data.mobile_no}</p>
                    <p className=" mb-0">
                      Email :
                      <Link to="mailto:info@kmchoksi@gmail.com">
                        info@kmchoksi@gmail.com
                      </Link>
                    </p>
                    <Link className="google-map" to="#">
                      view on google map
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 mb-6 mb-md-0">
                  <img
                    src={data.branch_image.replace(
                      "http://localhost:5000",
                      "https://kmchoksi.onrender.com"
                    )}
                    alt=""
                  />
                </div>
              </div>
            ))}

          {/* <div className="row mt-10">
            <div className="col-lg-4 mb-6 d-flex align-items-center">
              <div className="text-left px-5">
                <h4 className="font-weight-bold mb-2">Kosamba</h4>
                <p className="mb-3">
                  Dawjee Shopping Centre, 7,
                  <br /> Mota Mandir Rd, Kothi Ground, Tarsadi,
                  <br /> Kosamba, Gujarat 394120
                </p>
                <p className=" mb-0">Contact : 09726014777</p>
                <p className=" mb-0">
                  Email :
                  <Link to="mailto:info@kmchoksi@gmail.com">
                    info@kmchoksi@gmail.com
                  </Link>
                </p>
                <Link className="google-map" to="#">
                  view on google map
                </Link>
              </div>
            </div>
            <div className="col-lg-8 mb-6 mb-md-0">
              <img src="images/contact/kosamba.jpg" alt="" />
            </div>
          </div> */}
        </div>
      </section>
      <section className="pb-12">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <h2 className="fs-24 mb-2 font-weight-bold">
                We would love to hear from you.
              </h2>
              <p className="mb-7">
                If you’ve got great products your making or looking to work with
                us then drop us a line.
              </p>
              <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className="row mb-6">
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
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Your Email*"
                      required=""
                      name="email"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <p className="error text-right text-danger">
                        Please Enter a Email
                      </p>
                    )}
                  </div>
                </div>
                <div className="row mb-6">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.mobileno ? "is-invalid" : ""
                      }`}
                      placeholder="Mobile No.*"
                      required=""
                      name="mobileno"
                      {...register("mobileno", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <p className="error text-right text-danger">
                        Please Enter a Mobile No
                      </p>
                    )}
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      placeholder="Subject"
                      required=""
                      name="subject"
                      {...register("subject", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <p className="error text-right text-danger">
                        Please Enter a Subject
                      </p>
                    )}
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea
                    type="text"
                    className={`form-control ${
                      errors.comment ? "is-invalid" : ""
                    }`}
                    rows={6}
                    name="comment"
                    {...register("comment", {
                      required: "Please Enter a Comment",
                    })}
                  />

                  {errors.comment && (
                    <p className="error text-right text-danger">
                      Please Enter a Comment
                    </p>
                  )}
                </div>
                <div className="custom-control custom-checkbox mb-6">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label fs-15"
                    htmlFor="customCheck1">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-uppercase letter-spacing-05">
                  submit now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Storelocator;
