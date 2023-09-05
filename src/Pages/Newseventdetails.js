import React from "react";
import { Link, useLocation } from "react-router-dom";

const Newseventdetails = () => {
  const location = useLocation();
  const data = location.state?.data || {};
  console.log(data);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <main id="content">
      <section className="pt-10 border-bottom">
        <div className="container">
          <p className="card-text fs-12 mb-2 text-muted lh-12 text-uppercase letter-spacing-05 text-center font-weight-500">
            {data.eventDate ? formatDate(data.eventDate.substring(0, 10)) : ""}
          </p>
          <h1 className="mb-2 fs-40 text-center">{data.subTitle}</h1>
          {/* <p className="mb-10 text-center">
            By <span className="text-primary">Selena Gomez</span> on{" "}
            <span className="text-primary">Interior Design</span>
          </p> */}
          <div className="row no-gutters">
            <div className="col-lg-9 mx-auto mb-7 image-container">
              {/* <img
                src="images/blog_01.jpg"
                alt="Post01"
                className="w-100 mb-5"
              /> */}
              <img
                src={data.event_image.replace(
                  "http://localhost:5000",
                  "https://kmchoksi.onrender.com"
                )}
                alt=""
              />
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5 pt-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm-12 align-items-center">
              <div className="media align-items-center py-1 justify-content-center">
                <Link to="/newsevent" className="fs-14">
                  <i className="fas fa-arrow-left mr-2" /> BACK TO NEWS &amp;
                  EVENTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newseventdetails;
