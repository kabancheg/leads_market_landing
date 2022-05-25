import React from "react";
import Link from "next/link";
import Image from "next/image";

import coursesImg1 from "@/public/images/courses/courses1.jpg";
import coursesImg2 from "@/public/images/courses/courses2.jpg";
import coursesImg3 from "@/public/images/courses/courses3.jpg";
import coursesImg4 from "@/public/images/courses/courses4.jpg";
import coursesImg5 from "@/public/images/courses/courses5.jpg";
import coursesImg6 from "@/public/images/courses/courses6.jpg";
import coursesImg7 from "@/public/images/courses/courses7.jpg";
import coursesImg8 from "@/public/images/courses/courses8.jpg";
import coursesImg9 from "@/public/images/courses/courses9.jpg";

import usersImg1 from "@/public/images/user/user1.jpg";
import usersImg2 from "@/public/images/user/user2.jpg";
import usersImg3 from "@/public/images/user/user3.jpg";

const Content = () => {
  return (
    <div className="courses-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-courses-box">
              <Link href="https://pac.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg1} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">15€</div>
                <h3 className="nunito-font">
                  <Link href="https://pac.instaleads.fr/">
                    <a>Pompe a chaleur</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">PAC</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 14 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-courses-box">
              <Link href="https://iso.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg2} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">55€</div>
                <h3 className="nunito-font">
                  <Link href="https://iso.instaleads.fr/">
                    <a>
                      Isolation Thermique Exterieur et Intérieur
                    </a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">ISO</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 10 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="single-courses-box">
              <Link href="https://pac.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg3} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">12€</div>
                <h3 className="nunito-font">
                  <Link href="https://cag.instaleads.fr/">
                    <a>Chaudière à granulé</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>Mon artisanRGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">CAG</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 09 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-courses-box">
              <Link href="https://pac.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg4} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">15€</div>
                <h3 className="nunito-font">
                  <Link href="https://pv.instaleads.fr/">
                    <a>
                      Panneaux Solaire
                    </a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">PV</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 14 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-courses-box">
              <Link href="https://cpf.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg5} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$55</div>
                <h3 className="nunito-font">
                  <Link href="https://cpf.instaleads.fr/">
                    <a>Formation CPF</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg2} alt="author" />
                      </div>
                      <span>Mes droits formation</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">CPF</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 10 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="single-courses-box">
              <Link href="https://pac.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg6} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">19€</div>
                <h3 className="nunito-font">
                  <Link href="https://aa.instaleads.fr/">
                    <a>Aide auditif</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg3} alt="author" />
                      </div>
                      <span>Direct auditif</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">AA</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 09 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-courses-box">
              <Link href="https://pac.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg7} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">15€</div>
                <h3 className="nunito-font">
                  <Link href="https://as.instaleads.fr/">
                    <a>Assurance</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg3} alt="author" />
                      </div>
                      <span>Directmutuelle.com</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">AS</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 14 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-courses-box">
              <Link href="https://pac.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg8} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">15€</div>
                <h3 className="nunito-font">
                  <Link href="https://pg.instaleads.fr/">
                    <a>Pôele à granulé</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">PAG</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 50 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="single-courses-box">
              <Link href="https://pac.instaleads.fr/">
                <a className="image d-block">
                  <Image src={coursesImg9} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">19€</div>
                <h3 className="nunito-font">
                  <Link href="https://pac.instaleads.fr/">
                    <a>Fenetre</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">FE</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 3 leads
                </li>
                <li>
                  <i className="flaticon-team"></i> Aujourd'hui
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
