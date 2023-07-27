import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform the search operation
    console.log("Search keyword:", searchKeyword);
    setIsSearchPopupOpen(false); // Close the popup after search
  };

  return (
    <>
      <header className="main-header navbar-light header-sticky header-sticky-smart">
        <div className="sticky-area">
          <div className="container-fluid">
            <div className="d-none d-xl-block">
              <nav className="navbar navbar-expand-xl px-0 py-2 py-xl-0 row no-gutters">
                <div className="col-xl-2">
                  <Link className="navbar-brand mr-0" to="/">
                    <img src="assets/images/logo.svg" alt="K M Choksi" />
                  </Link>
                </div>
                <div className="col-xl-6 d-flex justify-content-center position-static">
                  <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                    <li
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item dropdown-item-home dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link className="nav-link p-0" to="/history">
                        History
                        <span className="caret" />
                      </Link>
                    </li>
                    <li
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item dropdown-item-pages dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link
                        className="nav-link dropdown-toggle p-0"
                        to="/ourbrands"
                        data-toggle="dropdown">
                        Our Brands
                        <span className="caret" />
                      </Link>
                      <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                        <li className="dropdown-item dropdown dropright">
                          <Link className="dropdown-link" to="#">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="faqs.html">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="service.html">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link
                            className="dropdown-link"
                            to="login-register.html">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item dropdown-item-shop dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link
                        className="nav-link dropdown-toggle p-0"
                        to="store.html"
                        data-toggle="dropdown">
                        Our Products
                        <span className="caret" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-xl px-0 pb-10 pt-5 dropdown-menu-listing overflow-hidden x-animated x-fadeInUp">
                        <div className="container container-xxl">
                          <div className="row no-gutters w-100">
                            <div className="col-2">
                              <div className="dropdown-item">
                                <Link className="dropdown-link" to="#">
                                  Earring
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link className="dropdown-link" to="#">
                                  Ring
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link className="dropdown-link" to="#">
                                  Mangalsutra
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link className="dropdown-link" to="#">
                                  Braceletes
                                </Link>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-01.html">
                                  Kadas
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-02.html">
                                  Bangles
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-03.html">
                                  Chain
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-04.html">
                                  Pendant
                                </Link>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-03.html">
                                  Diamond
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-05.html">
                                  Pendant Set
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-07.html">
                                  Necklace
                                </Link>
                              </div>
                              <div className="dropdown-item">
                                <Link
                                  className="dropdown-link"
                                  to="product-page-06.html">
                                  Antique Jewellery
                                </Link>
                              </div>
                            </div>
                            <div className="col-6 h-100">
                              <div className="card border-0 mt-2">
                                <img
                                  src="assets/images/menu.jpg"
                                  alt=""
                                  className="card-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="nav-item dropdown-item-contact dropdown py-2 py-xl-5 px-0 px-xl-4"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <Link
                        className="nav-link dropdown-toggle p-0"
                        to="#"
                        data-toggle="dropdown">
                        Diamond
                        <span className="caret" />
                      </Link>
                      <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="#">
                            Diamond
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="#">
                            Diamond
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item dropdown-item-blog dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link className="nav-link p-0" to="#">
                        Store Locator
                        <span className="caret" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 position-relative">
                  <div className="d-flex align-items-center justify-content-end">
                    <form className="d-flex align-items-center h-100">
                      <div className="input-group position-relative">
                        <input
                          type="text"
                          className="form-control border-0 border-bottom pl-0 border-2x bg-transparent"
                          placeholder="Search Something..."
                        />
                        <div className="input-group-append position-absolute pos-fixed-right-center">
                          <button
                            className="input-group-text bg-transparent border-0 text-primary fs-18 px-0"
                            type="submit">
                            <i className="far fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                    <ul className="navbar-nav flex-row justify-content-xl-end d-flex flex-wrap text-body py-0 navbar-right">
                      <li className="nav-item">
                        <Link className="nav-link pr-3 py-0" to="#">
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="bookappointment" to="#">
                          Book Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="d-block d-xl-none">
              <nav className="navbar navbar-expand-xl px-0 py-2 py-xl-0 w-100 align-items-center">
                <button
                  className="navbar-toggler border-0 px-0 canvas-toggle"
                  type="button"
                  data-canvas="true"
                  data-canvas-options='{"width":"250px","container":".sidenav"}'>
                  <span className="fs-24 toggle-icon" />
                </button>
                <Link
                  className="navbar-brand d-inline-block mx-auto"
                  to="index.html">
                  <img src="assets/images/logo.png" alt="Furnitor" />
                </Link>
                <Link
                  to="#search-popup"
                  data-gtf-mfp="true"
                  data-mfp-options='{"type":"inline","focus": "#keyword","mainClass": "mfp-search-form mfp-move-from-top mfp-align-top"}'
                  className="nav-search d-block py-0"
                  title="Search">
                  <i className="far fa-search" />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="sidenav canvas-sidebar bg-white">
        <div className="canvas-overlay"></div>
        <div className="pt-5 pb-7 card border-0 h-100">
          <div className="d-flex align-items-center card-header border-0 py-0 pl-8 pr-7 mb-9 bg-transparent">
            <Link href="index-2.html" className="d-block w-52px">
              <img src="assets/images/short_logo.png" alt="Furnitor" />
            </Link>
            <span className="canvas-close d-inline-block text-right fs-24 ml-auto lh-1 text-primary">
              <i className="fal fa-times" />
            </span>
          </div>
          <div className="overflow-y-auto pb-6 pl-8 pr-7 card-body pt-0">
            <ul className="navbar-nav main-menu px-0 ">
              <li
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-item py-1 px-0">
                <Link className="nav-link p-0" href="#">
                  History
                  <span className="caret" />
                </Link>
              </li>
              <li
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-item dropdown py-1 px-0">
                <Link
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  data-toggle="dropdown">
                  Our Brands <span className="caret" />
                </Link>
                <div className="dropdown-menu p-0 dropdown-menu-listing x-animated x-fadeInUp">
                  <div className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Brand 01
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Brand 01
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Brand 01
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Brand 01
                    </Link>
                  </div>
                </div>
              </li>
              <li
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-item dropdown py-1 px-0">
                <Link
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  data-toggle="dropdown">
                  Our Products
                  <span className="caret" />
                </Link>
                <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Earring
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Ring
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Mangalsutra
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Braceletes
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Kadas
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Bangles
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-item dropdown py-1 px-0">
                <Link
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  data-toggle="dropdown">
                  Diamond
                  <span className="caret" />
                </Link>
                <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Diamond
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" href="#">
                      Diamond
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-item py-1 px-0">
                <Link className="nav-link  p-0" href="#">
                  Store Locator
                </Link>
              </li>
              <li
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-item py-1 px-0">
                <Link className="nav-link  p-0" href="#">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-footer bg-transparent border-0 mt-auto pl-8 pr-7 pb-0 pt-4">
            <ul className="list-inline d-flex align-items-center mb-3">
              <li className="list-inline-item mr-4">
                <Link href="#" className="fs-20 lh-1">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li className="list-inline-item mr-4">
                <Link href="#" className="fs-20 lh-1">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li className="list-inline-item mr-4">
                <Link href="#" className="fs-20 lh-1">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li className="list-inline-item mr-4">
                <Link href="#" className="fs-20 lh-1">
                  <i className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
            <p className="mb-0 text-gray">© 2023 K M Choksi jewellers.</p>
          </div>
        </div>
      </div>
      <>
        <div className="position-fixed pos-fixed-bottom-right p-6 z-index-10">
          <a
            href="#"
            className="gtf-back-to-top bg-white text-primary hover-white bg-hover-primary shadow p-0 w-52px h-52 rounded-circle fs-20 d-flex align-items-center justify-content-center"
            title="Back To Top">
            <i className="fal fa-arrow-up" />
          </a>
        </div>
        {isSearchPopupOpen && (
          <div
            className="mfp-hide search-popup mfp-with-anim"
            id="search-popup">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group position-relative">
                <input
                  type="text"
                  id="keyword"
                  name="keyword"
                  className="form-control border-0 border-bottom border-2x bg-transparent text-white border-white fs-24 form-control-lg"
                  placeholder="Search Something..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <div className="input-group-append position-absolute pos-fixed-right-center">
                  <button
                    className="input-group-text bg-transparent border-0 text-white fs-30 px-0 btn-lg"
                    type="submit">
                    <i className="far fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
