import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";
import { useSelector, useDispatch } from "react-redux";
import { newsevent } from "../Redux/GetnewseventSlice";
import ReactPaginate from "react-paginate";

const Newsevent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(12);

  const newsevents = useSelector(
    (state) => state.Getnewsevent.data?.document || []
  );
  console.log(newsevents);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsevent());
  }, [dispatch]);

  const toComponentB = (data, event) => {
    event.preventDefault();
    navigate("/newseventdetails", { state: { data } });
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // Calculate the current page's items
  const indexOfLastItem = (currentPage + 1) * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = newsevents.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <main id="content">
      <section className="pt-10 pb-11 pb-lg-15">
        <div className="container container-xxl">
          <h2 className="fs-sm-30 mb-8 text-center">NEWS &amp; EVENTS</h2>
          <div className="row">
            {currentItems.map((data) => (
              <Animated
                key={data.id} // Add a unique key for each item
                animationOut="fadeInUp"
                animationIn="fadeInUp"
                isVisible={true}
                className="col-sm-6 col-lg-3 mb-8">
                <div className="card border-0">
                  <Link
                    onClick={(event) => {
                      toComponentB(data, event);
                    }}
                    className="hover-shine card-img-top">
                    <img
                      src={data.event_image.replace(
                        "http://localhost:5000",
                        "https://kmchoksi.onrender.com"
                      )}
                      alt=""
                    />
                  </Link>
                  <div className="card-body px-0 pt-4 pb-0">
                    <p className="card-text fs-12 mb-2 text-muted lh-12 text-uppercase letter-spacing-05 font-weight-500">
                      {data.eventDate
                        ? formatDate(data.eventDate.substring(0, 10))
                        : ""}
                    </p>
                    <p className="card-title mb-0 fs-18">
                      <Link
                        onClick={(event) => {
                          toComponentB(data, event);
                        }}>
                        {data.title}
                      </Link>
                    </p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
          <nav className="pt-2">
            <ReactPaginate
              pageCount={Math.ceil(newsevents.length / perPage)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={handlePageChange}
              containerClassName="pagination justify-content-center align-items-center mb-0"
              activeClassName="active"
              previousLabel="Previous"
              nextLabel="Next"
              previousClassName="pagination-button-margin" // Add margin to the right of "Previous" button
              nextClassName="pagination-button-margin" // Add margin to the right of "Next" button
            />
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Newsevent;
