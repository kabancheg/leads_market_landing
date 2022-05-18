import React from "react";
import Link from "@/utils/ActiveLink";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import courseImg from "@/public/images/navbar.jpg";

const Navbar3 = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area">
      <div className="main-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
              <a className="navbar-brand">
                <Image src={logo} alt="site logo" width={112} height={40} />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="https://pro.monartisanrge.fr" className="nav-link">Energie renouvelable</a>
                </li>
                <li className="nav-item">
                  <a href="https://cpf.instaleads.fr" className="nav-link">Formation CPF</a>
                </li>
                <li className="nav-item">
                  <Link href="/services" activeClassName="active">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a className="nav-link">Contacts</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="others-option">
              <Link href="/pricing" activeClassName="active">
                <a className="btn-style-one red-light-color">
                  Download Now <i className="bx bx-chevron-right"></i>
                </a>
              </Link>
            </div> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
