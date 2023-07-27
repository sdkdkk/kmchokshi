import React from "react";

const History = () => {
  return (
    <main id="content">
      <section className="inner-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="inner-banner-text">
                <h1>Our History</h1>
                <p>The Wedding Jewellery</p>
              </div>
            </div>
            <div className="col-lg-10">
              <img
                className="w-100 inner-banner-img"
                src="assets/images/about-banner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pt-md-15 pb-md-15">
        <div className="container container-xxl">
          <div className="row align-items-center">
            <div className="col-6 col-md-3" data-animate="fadeInLeft">
              <img
                className="w-100"
                src="assets/images/about/about01.jpg"
                alt="about"
              />
            </div>
            <div className="col-6 col-md-3" data-animate="fadeInLeft">
              <img
                className="w-100"
                src="assets/images/about/about02.jpg"
                alt="about"
              />
            </div>
            <div className="col-md-6 mb-6" data-animate="fadeInRight">
              <div className="p-8 bg-color-1 mt-6 mt-lg-0">
                <h2 className="fs-30 mb-5 lh-12">ABOUT US</h2>
                <p className="font-weight-500">
                  Building a legacy brand in the jewellery business is a
                  lifelong pursuit. It requires a deeply conscious understanding
                  of your customer and their needs; boundless creativity to
                  craft ideas into tangible, joyful products and experiences;
                  and a spirit of inclusion that inspires and empowers everyone
                  along on the path. We now introduce you to our management
                  board that leads k m choksi jewellers, with clarity of purpose
                  and ambition to power ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 pb-12">
        <div className="container-fluid">
          <div className="row ">
            <div
              className="col-lg-6 text-center brand-bg"
              data-animate="fadeInLeft">
              <img
                className="w-100"
                src="assets/images/about/ceo_kmchoksi01.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6" data-animate="fadeInRight">
              <div className="pl-lg-10 pr-lg-15 d-flex flex-column justify-content-center h-100">
                <h2 className="fs-34 mb-2 mt-5">Ashvinkumar Kesharimal Shah</h2>
                <p className="mb-7 font-weight-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div></div>
              </div>
            </div>
          </div>
          <div className="row pt-lg-10 pt-5 flex-md-row-reverse">
            <div
              className="col-lg-6 text-center brand-bg"
              data-animate="fadeInRight">
              <img
                className="w-100"
                src="assets/images/about/ceo_kmchoksi02.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6" data-animate="fadeInLeft">
              <div className="pl-lg-15 pr-lg-10 d-flex flex-column justify-content-center h-100 text-lg-right">
                <h2 className="fs-34 mb-2 mt-5">Sheelaben Ashwinkumar Shah</h2>
                <p className="mb-7 font-weight-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;
