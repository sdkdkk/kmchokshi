import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-13 pb-7 footer bg-color-6">
      <div className="container container-xxl">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-6 mb-lg-0 text-center">
            <h3 className="fs-16 mb-3 text-uppercase letter-spacing-05">
              Overview
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Our Story
                </Link>{" "}
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Our History
                </Link>{" "}
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Contact Us
                </Link>{" "}
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  Privacy Policy
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 mb-6 mb-lg-0 text-center f-border-left f-border-right">
            <div className="footer-logo">
              <img src="images/logo-white.svg" alt="" />
            </div>
            <h3 className="fs-16 mb-3 mt-5 text-uppercase letter-spacing-05">
              Follow Us
            </h3>
            <ul className="followus-icon mb-0">
              <li>
                <Link href="#">
                  <i className="fab fa-facebook" />
                </Link>{" "}
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>{" "}
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>{" "}
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-youtube" />
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 mb-6 mb-lg-0 text-center">
            <h3 className="fs-16 mb-3 text-uppercase letter-spacing-05">
              Contact Us
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  <i className="fab fa-whatsapp mr-1" /> +91 9510970230{" "}
                </Link>{" "}
              </li>
              <li className="py-1">
                <Link
                  href="#"
                  className="text-gray hover-white font-weight-500">
                  <i className="fal fa-phone-alt mr-1" /> +91 261 229 5000{" "}
                </Link>{" "}
              </li>
              <li className="py-1">
                <Link
                  href="mailto:info@kalamandirjewellers.com"
                  className="text-gray hover-white font-weight-500">
                  <i className="fal fa-paper-plane mr-1" />{" "}
                  info@kalamandirjewellers.com
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-2 mt-md-7 row align-items-center f-border-top text-center">
          <p className="mx-auto pt-4 mb-4 mb-md-0 text-gray fs-14 font-weight-500">
            © 2023 K M Choksi jewellers. | Website Designed By:{" "}
            <Link
              target="_blank"
              className="text-gray hover-white"
              href="https://www.setblue.com/"
              title="+91 98985 98984">
              Setblue
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;