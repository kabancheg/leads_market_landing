import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="pricing-area with-top-border pt-100 pb-75">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-4 col-lg-12 col-md-12"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="section-title pricing-section-title">
              <span className="sub-title light-green-color">Tableau des prix</span>
              <h2>Aucun frais caché appliqué</h2>
            </div>
          </div>

          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className="row justify-content-center">
              <div
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="single-pricing-box">
                  <h3>Energie renouvelable</h3>
                  <p>Pompe a chaleur, isloation, Panneaux solarie, ...</p>
                  <div className="price">
                    <span>a partir de</span> 12€
                  </div>

                  <a href="https://pro.monartisanrge.fr" target="_blank" className="btn-style-one light-green-color" style={{ cursor: "pointer" }}>
                    Commencez maintenant <i className="bx bx-chevron-right"></i>
                  </a>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-draw-check-mark"></i>
                      Lead qualifie
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="single-pricing-box">
                  <h3>Formation CPF</h3>
                  <p>Langues, Informatique, Getion administratif ...</p>
                  <div className="price">
                    <span>a partir de</span> 25€
                  </div>

                  <a href="https://cpf.instaleads.fr" target="_blank" className="btn-style-one light-green-color" style={{ cursor: "pointer" }}>
                    Commencez maintenant <i className="bx bx-chevron-right"></i>
                  </a>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-draw-check-mark"></i>
                      Lead qualifie
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
