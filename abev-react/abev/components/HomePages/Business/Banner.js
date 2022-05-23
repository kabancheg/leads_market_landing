import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="business-banner-area">
      <div className="container-fluid">
        <div className="business-banner-content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            Ready to take your business growth to the next level?
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            Afin de simplifier l'acquisition de client. Congue mi tempor condimentum
            felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et
            leo odio.
          </p>
          <div
            className="btn-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <Link href="/contact">
              <a className="btn-style-one red-light-color">
                Créer votre compte <i className="bx bx-chevron-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
