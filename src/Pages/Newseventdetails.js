import React from "react";
import { Link } from "react-router-dom";

const Newseventdetails = () => {
  return (
    <main id="content">
      <section className="pt-10 border-bottom">
        <div className="container">
          <p className="card-text fs-12 mb-2 text-muted lh-12 text-uppercase letter-spacing-05 text-center font-weight-500">
            April 24, 2019
          </p>
          <h1 className="mb-2 fs-40 text-center">499 Per Gm. Making Charge</h1>
          <p className="mb-10 text-center">
            By <span className="text-primary">Selena Gomez</span> on{" "}
            <span className="text-primary">Interior Design</span>
          </p>
          <div className="row no-gutters">
            <div className="col-lg-9 mx-auto mb-7">
              <img
                src="images/blog_01.jpg"
                alt="Post01"
                className="w-100 mb-5"
              />
              <p className="fs-20 text-primary font-weight-500 mb-5">
                Awkwardness gives me great comfort. I’ve never been cool, but
                I’ve felt cool. I’ve been in the cool place, but I wasn’t really
                cool – I was trying to pass for hip or cool. Fashion never
                stops. There is always the new project, the new opportunity.
              </p>
              <p className="mb-5">
                Awkwardness gives me great comfort. I’ve never been cool, but
                I’ve felt cool. I’ve been in the cool place, but I wasn’t really
                cool – I was trying to pass for hip or cool. Fashion never
                stops. There is always the new project, the new opportunity. I
                always say: To be well dressed you must be well naked.
              </p>
              <p className="mb-8">
                A girl should be two things: classy and fabulous. I am convinced
                that there can be luxury in simplicity. I wanted to dress the
                woman who lives and works, not the woman in a painting. It’s
                hard to balance everything. It’s always challenging. My
                relationships with producers or photographers – these are
                relationships that took years. I can’t get sucked into that
                celebrity thing, because I think it’s just crass. My aim is to
                make the poor look rich and the rich look poor. Vanity is the
                healthiest thing in life. I believe that my clothes can give
                people a better image of themselves – that it can increase their
                feelings of confidence and happiness. You can hide so much
                behind theatrics, and I don’t need to do that any more. I don’t
                really know how to do casual clothes.
              </p>
              <h3 className="fs-24 mb-4">
                Breaking Up With Fast Fashion Has Been Easier
              </h3>
              <p className="mb-9">
                Awkwardness gives me great comfort. I’ve never been cool, but
                I’ve felt cool. I’ve been in the cool place, but I wasn’t really
                cool – I was trying to pass for hip or cool. Fashion never
                stops. There is always the new project, the new opportunity. I
                always say: To be well dressed you must be well naked.
              </p>
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
