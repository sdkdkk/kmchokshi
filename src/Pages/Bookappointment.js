import React from "react";
import { useForm } from "react-hook-form";

const Bookappointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {};

  return (
    <main id="content">
      <section className="inner-banner m-0 p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <img className="w-100" src="images/book-appointment.jpg" alt="" />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center pl-lg-10 pr-lg-10">
              <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <h2 className="fs-30 mb-5 mt-5 font-weight-bold text-center">
                  Book An Appointment
                </h2>
                <div className="row">
                  <div className="col-sm-12 mb-4">
                    <input
                      type="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your Name*"
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
                  <div className="col-sm-12 mb-4">
                    <input
                      type="Mobile Number"
                      className={`form-control ${
                        errors.mobileno ? "is-invalid" : ""
                      }`}
                      placeholder="Mobile number*"
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
                  <div className="col-sm-6 mb-4">
                    <div className="custom-control custom-radio">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="book-form"
                        id="store-visit"
                        defaultValue="option1"
                      />
                      <label
                        className="custom-control-label text-primary ml-2"
                        htmlFor="store-visit">
                        Store Visit
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <div className="custom-control custom-radio">
                      <input
                        className="custom-control-input"
                        type="radio"
                        name="book-form"
                        id="video-call"
                        defaultValue="option1"
                      />
                      <label
                        className="custom-control-label text-primary ml-2"
                        htmlFor="video-call">
                        Video Call
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <select
                      className={`dropdown-box ${
                        errors.country ? "is-invalid" : ""
                      }`}
                      name="country"
                      {...register("country", {
                        required: "Please select a country",
                      })}>
                      <option value="">Choose City*</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="US">United States (US)</option>
                    </select>
                    {errors.country && (
                      <p className="text-danger">Please select a country</p>
                    )}
                  </div>
                  <div className="col-sm-6 mb-4">
                    <select
                      className={`dropdown-box ${
                        errors.store ? "is-invalid" : ""
                      }`}
                      name="store"
                      {...register("store", {
                        required: "Please choose a store",
                      })}>
                      <option value="">Choose Store*</option>
                      <option value="Surat">Surat</option>
                      <option value="Bharuch">Bharuch</option>
                    </select>
                    {errors.store && (
                      <p className="error text-right text-danger">
                        Please choose a store
                      </p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <input
                      type="Pick the Date"
                      className={`form-control ${
                        errors.date ? "is-invalid" : ""
                      }`}
                      placeholder="Pick the Date*"
                      name="date"
                      {...register("date", {
                        required: true,
                      })}
                    />
                    {errors.date && (
                      <p className="error text-right text-danger">
                        Please Select a Date
                      </p>
                    )}
                  </div>
                  <div className="col-sm-6 mb-4">
                    <input
                      type="Pick the Time"
                      className={`form-control ${
                        errors.time ? "is-invalid" : ""
                      }`}
                      placeholder="Pick the Time*"
                      name="time"
                      {...register("time", {
                        required: true,
                      })}
                    />
                    {errors.time && (
                      <p className="error text-right text-danger">
                        Please Select a Time
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
                      required: "Jewelry that you are looking for ?",
                    })}
                  />
                  {errors.comment && (
                    <p className="error text-right text-danger">
                      Please Enter Jewelry that you are looking for ?
                    </p>
                  )}
                </div>
                <div className="custom-control custom-checkbox mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label fs-15"
                    htmlFor="customCheck1">
                    {" "}
                    Send notifications to my phone
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mb-5 text-uppercase letter-spacing-05 w-100">
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

export default Bookappointment;
