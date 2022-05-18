import React from "react";
import Image from "next/image";
import Link from "next/link";

import goalImg1 from "@/public/images/goal3.png";

const Goal = () => {
  return (
    <div className="goal-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="goal-image">
              <Image src={goalImg1} alt="goal-image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="goal-content purple-color">
              <span className="sub-title">Our Goal</span>
              <h2 className="nunito-font">
                Deal with customer queries in minutes
              </h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <i className="flaticon-draw-check-mark"></i>
                  Recommender systems
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Omnichannel analytics
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Product line optimization
                </li>
              </ul>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Link href="/contact">
                  <a className="btn-style-one purple-color">
                    Get Started Now <i className="bx bx-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
