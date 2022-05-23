import React from "react";
import Link from "@/utils/ActiveLink";
import Image from "next/image";

import logo from "@/public/images/logo.png";
// import courseImg from "@/public/images/navbar.jpg";

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
                <Image src={logo} alt="site logo" width={170} height={27} />
              </a>
            </Link>

            <div className="others-option">
              <Link href="https://pro.monartisanrge.fr" activeClassName="active">
                <a className="btn-style-one red-light-color">
                  Lead Market <i className="bx bx-chevron-right"></i>
                </a>
              </Link>
            </div>

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
                  <a href="/" className="nav-link">Accueil</a>
                </li>
                <li className="nav-item">
                  <a href="/about-us" className="nav-link">A propos</a>
                </li>
                <li className="nav-item">
                  <Link href="/how" activeClassName="active">
                    <a className="nav-link">Fonctionnement</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services" activeClassName="active">
                    <a className="nav-link">Thématique</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a className="nav-link">Contacts</a>
                  </Link>
                </li>
              </ul>
            </div>

           
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
