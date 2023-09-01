import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cmslist } from "../Redux/GetcmsallSlice";
import { getcategory } from "../Redux/GetcategorySlice";

const Navbar = () => {
  const cmslists = useSelector((state) => state.Getcmsall.data?.document || []);

  const getcategories = useSelector(
    (state) => state.Getcategory.data?.document || []
  );

  console.log(getcategories);

  console.log(getcategories[0]?.name);

  console.log(cmslists[0]?.title);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cmslist());
    dispatch(getcategory());
  }, [dispatch]);

  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search keyword:", searchKeyword);
    setIsSearchPopupOpen(false);
  };

  const [isSearchPopupVisible, setSearchPopupVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchPopupVisible((prevVisible) => !prevVisible);
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
                    <img
                      src="images/logo.png"
                      alt="K M Choksi"
                      style={{ maxHeight: "60px", maxWidth: "100%" }}
                    />
                  </Link>
                </div>
                <div className="col-xl-6 d-flex justify-content-center position-static">
                  <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                    <li className="nav-item dropdown-item-home dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link className="nav-link p-0" to="/history">
                        {cmslists[1]?.title}
                        <span className="caret" />
                      </Link>
                    </li>
                    <li className="nav-item dropdown-item-pages dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link
                        className="nav-link dropdown-toggle p-0"
                        to="/ourbrands"
                        data-toggle="dropdown">
                        {/* Our Brands */}
                        {cmslists[2]?.title}
                        <span className="caret" />
                      </Link>
                      <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                        <li className="dropdown-item dropdown dropright">
                          <Link className="dropdown-link" to="/ourbrands">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="/ourbrands">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="/ourbrands">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="/ourbrands">
                            Kanyadan - Wedding Collection
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown-item-shop dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link
                        className="nav-link dropdown-toggle p-0"
                        to="/ourproducts"
                        data-toggle="dropdown">
                        {/* Our Products */}
                        {cmslists[3]?.title}
                        <span className="caret" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-xl px-0 pb-10 pt-5 dropdown-menu-listing overflow-hidden x-animated x-fadeInUp">
                        <div className="container container-xxl">
                          <div className="row no-gutters w-100">
                            <div className="col-2">
                              {getcategories.slice(0, 4).map((item, index) => (
                                <div className="dropdown-item" key={index}>
                                  <Link
                                    className="dropdown-link"
                                    to="/ourproducts">
                                    {item.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div className="col-2">
                              {getcategories.slice(4, 8).map((item, index) => (
                                <div className="dropdown-item" key={index}>
                                  <Link
                                    className="dropdown-link"
                                    to="/ourproducts">
                                    {item.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div className="col-2">
                              {getcategories.slice(8, 12).map((item, index) => (
                                <div className="dropdown-item" key={index}>
                                  <Link
                                    className="dropdown-link"
                                    to="/ourproducts/">
                                    {item.name}
                                  </Link>
                                </div>
                              ))}
                            </div>
                            {/* <div className="col-2">
                              {getcategories.slice(12, 16).map((item, index) => (
                                <div className="dropdown-item" key={index}>
                                  <Link className="dropdown-link" to="/ourproducts">
                                    {item.name}
                                  </Link>
                                </div>
                              ))}
                            </div> */}
                            <div className="col-6 h-100">
                              <div className="card border-0 mt-2">
                                <img
                                  src="images/menu.jpg"
                                  alt=""
                                  className="card-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li className="nav-item dropdown-item-contact dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link
                        className="nav-link dropdown-toggle p-0"
                        to="/diamond"
                        data-toggle="dropdown">
                        Diamond
                        <span className="caret" />
                      </Link>
                      <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="/diamond">
                            Diamond
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link" to="/diamond">
                            Diamond
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li className="nav-item dropdown-item-blog dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link className="nav-link p-0" to="/storelocator">
                        {/* Store Locator */}
                        {cmslists[4]?.title}
                        <span className="caret" />
                      </Link>
                    </li>
                    <li className="nav-item dropdown-item-blog dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link className="nav-link p-0" to="/storelocator">
                        {/* Store Locator */}
                        {cmslists[5]?.title}
                        <span className="caret" />
                      </Link>
                    </li>
                    <li className="nav-item dropdown-item-blog dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link className="nav-link p-0" to="/storelocator">
                        {/* Store Locator */}
                        {cmslists[6]?.title}
                        <span className="caret" />
                      </Link>
                    </li>
                    <li className="nav-item dropdown-item-blog dropdown py-2 py-xl-5 px-0 px-xl-4">
                      <Link className="nav-link p-0" to="/storelocator">
                        {/* Store Locator */}
                        {cmslists[7]?.title}
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
                            onClick={handleSearchClick}
                            className="input-group-text bg-transparent border-0 text-primary fs-18 px-0"
                            type="submit">
                            <i className="far fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                    <ul className="navbar-nav flex-row justify-content-xl-end d-flex flex-wrap text-body py-0 navbar-right">
                      <li className="nav-item">
                        <Link
                          className="nav-link pr-3 py-0"
                          to="/bookappointment">
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="bookappointment" to="/bookappointment">
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
                <Link className="navbar-brand d-inline-block mx-auto" to="/">
                  <img
                    src="images/logo.png"
                    alt="Furnitor"
                    style={{ maxHeight: "40px", maxWidth: "100%" }}
                  />
                </Link>
                <Link
                  onClick={handleSearchClick}
                  className="nav-search d-block py-0"
                  title="Search">
                  <i className="far fa-search" />
                </Link>
              </nav>
            </div>
            {isSearchPopupVisible && (
              <div id="search-popup">
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
          </div>
        </div>
      </header>
      <div className="sidenav canvas-sidebar bg-white">
        <div className="canvas-overlay"></div>
        <div className="pt-5 pb-7 card border-0 h-100">
          <div className="d-flex align-items-center card-header border-0 py-0 pl-8 pr-7 mb-9 bg-transparent">
            <Link to="/" className="d-block w-52px">
              <img src="images/short_logo.png" alt="Furnitor" />
            </Link>
            <span className="canvas-close d-inline-block text-right fs-24 ml-auto lh-1 text-primary">
              <i className="fal fa-times" />
            </span>
          </div>
          <div className="overflow-y-auto pb-6 pl-8 pr-7 card-body pt-0">
            <ul className="navbar-nav main-menu px-0 ">
              <li className="nav-item py-1 px-0">
                <Link className="nav-link p-0" to="/history">
                  History
                  <span className="caret" />
                </Link>
              </li>
              <li className="nav-item dropdown py-1 px-0">
                <Link
                  className="nav-link dropdown-toggle p-0"
                  to="/ourbrands"
                  data-toggle="dropdown">
                  Our Brands <span className="caret" />
                </Link>
                <div className="dropdown-menu p-0 dropdown-menu-listing x-animated x-fadeInUp">
                  <div className="dropdown-item">
                    <Link className="dropdown-link" to="/ourbrands">
                      Brand 01
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link className="dropdown-link" to="/ourbrands">
                      Brand 01
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link className="dropdown-link" to="/ourbrands">
                      Brand 01
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link className="dropdown-link" to="/ourbrands">
                      Brand 01
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown py-1 px-0">
                <Link
                  className="nav-link dropdown-toggle p-0"
                  to="/ourproducts"
                  data-toggle="dropdown">
                  Our Products
                  <span className="caret" />
                </Link>
                <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/ourproducts">
                      Earring
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/ourproducts">
                      Ring
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/ourproducts">
                      Mangalsutra
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/ourproducts">
                      Braceletes
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/ourproducts">
                      Kadas
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/ourproducts">
                      Bangles
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown py-1 px-0">
                <Link
                  className="nav-link dropdown-toggle p-0"
                  to="/diamond"
                  data-toggle="dropdown">
                  Diamond
                  <span className="caret" />
                </Link>
                <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/diamond">
                      Diamond
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-link" to="/diamond">
                      Diamond
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item py-1 px-0">
                <Link className="nav-link  p-0" to="/storelocator">
                  Store Locator
                </Link>
              </li>
              <li className="nav-item py-1 px-0">
                <Link className="nav-link  p-0" to="/bookappointment">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-footer bg-transparent border-0 mt-auto pl-8 pr-7 pb-0 pt-4">
            <ul className="list-inline d-flex align-items-center mb-3">
              <li className="list-inline-item mr-4">
                <Link
                  to="https://www.facebook.com/kmchoksi.jewellers/"
                  target="_blank">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li className="list-inline-item mr-4">
                <Link
                  to="https://twitter.com/i/flow/login?redirect_after_login=%2Fkmchoksi"
                  target="_blank">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li className="list-inline-item mr-4">
                <Link
                  to="https://www.instagram.com/k_m_choksi_official/?hl=en"
                  target="_blank">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li className="list-inline-item mr-4">
                <Link
                  to="https://www.youtube.com/watch?v=DuRbhBqnFmI"
                  target="_blank">
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
          <Link
            to="#"
            className="gtf-back-to-top bg-white text-primary hover-white bg-hover-primary shadow p-0 w-52px h-52 rounded-circle fs-20 d-flex align-items-center justify-content-center"
            title="Back To Top">
            <i className="fal fa-arrow-up" />
          </Link>
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
