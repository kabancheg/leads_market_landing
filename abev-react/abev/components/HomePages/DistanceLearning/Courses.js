import React from "react";
import Link from "next/link";
import Image from "next/image";

import coursesImg1 from "@/public/images/courses/courses1.jpg";
import coursesImg2 from "@/public/images/courses/courses2.jpg";
import coursesImg3 from "@/public/images/courses/courses3.jpg";

import userImg1 from "@/public/images/user/user1.jpg";
import userImg2 from "@/public/images/user/user2.jpg";
import userImg3 from "@/public/images/user/user3.jpg";

const Courses = () => {
  return (
    <div className="courses-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title yellow-color">Alimentez vos commerciaux</span>
          <h2 className="nunito-font">Thématique des Leads</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-courses-box">
              <Link href="/courses/courses-details">
                <a className="image d-block">
                  <Image src={coursesImg1} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">12€</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Pompe â chaleur</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={userImg1} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Populaire</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-recruitment"></i> 14 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> 25 Departement
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
              <Link href="/courses/courses-details">
                <a className="image d-block">
                  <Image src={coursesImg2} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">55€</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>
                      Isolation Thermique Exterieur
                    </a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={userImg2} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 10 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> 50 Departement
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
              <Link href="/courses/courses-details">
                <a className="image d-block">
                  <Image src={coursesImg3} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">69€</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Chaudière a granulé</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={userImg3} alt="author" />
                      </div>
                      <span>Mon artisan RGE</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 09 Leads
                </li>
                <li>
                  <i className="flaticon-team"></i> 41 Département
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
