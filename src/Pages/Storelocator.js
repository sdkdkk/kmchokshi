import React from "react";
import { Link } from "react-router-dom";

const Storelocator = () => {
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
          <div className="row">
            <div className="col-lg-4 mb-6 d-flex align-items-center">
              <div className="text-left px-5">
                <h4 className="font-weight-bold mb-2">Surat</h4>
                <p className="mb-3">
                  Choksi House, <br />
                  Opp.Regent Arcade, Ghod Dod Rd,
                  <br />
                  Surat, Gujarat 395001
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
              <img src="images/contact/surat.jpg" alt="" />
            </div>
          </div>
          <div className="row mt-10">
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
          </div>
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
              <form>
                <div className="row mb-6">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name*"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email*"
                      required=""
                    />
                  </div>
                </div>
                <div className="row mb-6">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No.*"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea
                    className="form-control"
                    rows={6}
                    defaultValue={"Comment"}
                  />
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
