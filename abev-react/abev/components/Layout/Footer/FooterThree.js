import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import shapeImg from "@/public/images/shape/shape5.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-three pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <Link href="/">
                <a className="logo">
                  <Image src={logo} alt="logo" />
                </a>
              </Link>
              <p>
              Acheter vos leads en instantanée devient possible
              </p>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/monartisanrge.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-facebook-app-symbol"></i>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-instagram"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget pl-3">
              <h3>Liens rapides</h3>
              <ul className="quick-links">
                <li >
                  <a href="https://pro.monartisanrge.fr" >Energie renouvelable</a>
                </li>
                <li >
                  <a href="https://cpf.instaleads.fr" >Formation CPF</a>
                </li>
                <li >
                  <Link href="/services" >
                    <a >Services</a>
                  </Link>
                </li>
                <li >
                  <Link href="/contact" >
                    <a >Contacts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3>Contacts</h3>
              <div className="box">
                Email: info@instaleads.fr
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <p>
            Copyright &copy; {currentYear} Aveb. All Rights Reserved by{" "}
            <a href="https://instaleads.fr/" target="_blank" rel="noreferrer">
              Instaleads
            </a>
          </p>
        </div>
      </div>

      <div className="shape5">
        <Image src={shapeImg} alt="shape" />
      </div>
    </div>
  );
};

export default FooterThree;
