import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "@/public/images/about/about1.jpg";

const AboutArea = () => {
  return (
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-image bg1">
              <Image src={aboutImg} alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="about-content"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="sub-title">A propos d'instalead </span>
              <h2>L'histoire derrière notre firme</h2>
              <p>
                L'idée est venu dans l'optique de changer la conception du marché du lead sur internet. Nos clients sont l'objet de notre solution.
              </p>
              <ul className="about-list">
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Innovation adaptée
                  <Link href="/services/services-details">
                    <a className="link-btn">
                      <i className="bx bx-chevron-right"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Culture Collaborative 
                  <Link href="/services/services-details">
                    <a className="link-btn">
                      <i className="bx bx-chevron-right"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Business Planning
                  <Link href="/services/services-details">
                    <a className="link-btn">
                      <i className="bx bx-chevron-right"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Èquipe Professionnel
                  <Link href="/services/services-details">
                    <a className="link-btn">
                      <i className="bx bx-chevron-right"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  13+ ans d'Experience
                  <Link href="/services/services-details">
                    <a className="link-btn">
                      <i className="bx bx-chevron-right"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
