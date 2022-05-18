import React from "react";

const Features = () => {
  return (
    <div className="features-area bg-f3feff pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title light-green-color">Principales caractéristiques</span>
          <h2>Très probablement inclus les meilleures fonctionnalités de tous les temps</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-features-box">
              <div className="icon">
                <i className="flaticon-fast-time"></i>
              </div>
              <h3>En tempes reel</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-features-box active">
              <div className="icon">
                <i className="flaticon-credit-card"></i>
              </div>
              <h3>Paiement a l'unite</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="single-features-box">
              <div className="icon">
                <i className="flaticon-money-exchange"></i>
              </div>
              <h3>Facture a la reception</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-features-box">
              <div className="icon">
                <i className="flaticon-updated"></i>
              </div>
              <h3>Prospect verifie</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-features-box">
              <div className="icon">
                <i className="flaticon-brain"></i>
              </div>
              <h3>Pospect qualifie</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="single-features-box">
              <div className="icon">
                <i className="flaticon-secure-shield"></i>
              </div>
              <h3>Exclusif</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
