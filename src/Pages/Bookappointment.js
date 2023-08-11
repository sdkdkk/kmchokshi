import React from "react";

const Bookappointment = () => {
  return (
    <main id="content">
      <section className="inner-banner m-0 p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <img className="w-100" src="images/book-appointment.jpg" alt="" />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center pl-lg-10 pr-lg-10">
              <form>
                <h2 className="fs-30 mb-5 mt-5 font-weight-bold text-center">
                  Book An Appointment
                </h2>
                <div className="row">
                  <div className="col-sm-12 mb-4">
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Your Name*"
                      required=""
                    />
                  </div>
                  <div className="col-sm-12 mb-4">
                    <input
                      type="Mobile Number"
                      className="form-control"
                      placeholder="Mobile number*"
                      required=""
                    />
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
                    <select className="dropdown-box" required="" name="country">
                      <option>Choose City*</option>
                      <option>United Kingdom (UK)</option>
                      <option>United Kingdom (UK)</option>
                    </select>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <select className="dropdown-box" required="" name="country">
                      <option>Choose Store*</option>
                      <option>Surat</option>
                      <option>Bharuch</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mb-4">
                    <input
                      type="Pick the Date"
                      className="form-control"
                      placeholder="Pick the Date*"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6 mb-4">
                    <input
                      type="Pick the Time"
                      className="form-control"
                      placeholder="Pick the Time*"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea
                    className="form-control"
                    rows={6}
                    defaultValue={"Jewelry that you are looking for ?"}
                  />
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
