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
              <Link href="/courses/courses-details">
                <a className="image d-block">
                  <Image src={coursesImg1} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$45</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Make a 2D Platformer with State Machines in Unity</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>David Allen</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 14 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 125 Students
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
                <div className="price">$55</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>
                      Write Like a Boss: Master Your Business Writing Skills
                    </a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg2} alt="author" />
                      </div>
                      <span>Alina Smith</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 10 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 50 Students
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
                <div className="price">$69</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Asynchronous JavaScript: Promises, Callbacks</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg3} alt="author" />
                      </div>
                      <span>James Andy</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 09 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 41 Students
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
              <Link href="/courses/courses-details">
                <a className="image d-block">
                  <Image src={coursesImg4} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$45</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>
                      Node.js for Beginners: Go From Zero to Hero with Node.js
                    </a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>David Allen</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 14 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 125 Students
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
                  <Image src={coursesImg5} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$55</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Successful Course: Robot Humanoid Walk</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg2} alt="author" />
                      </div>
                      <span>Alina Smith</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 10 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 50 Students
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
                  <Image src={coursesImg6} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$69</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Graphic Design MasterclassName: Design Course A-z</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg3} alt="author" />
                      </div>
                      <span>James Andy</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 09 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 41 Students
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
              <Link href="/courses/courses-details">
                <a className="image d-block">
                  <Image src={coursesImg7} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$45</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Photography Is A Complete Guideline For Learning</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg1} alt="author" />
                      </div>
                      <span>David Allen</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 14 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 125 Students
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
                  <Image src={coursesImg8} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$55</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Finance Fundamentals - Easy Guide To Better Finances</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg2} alt="author" />
                      </div>
                      <span>Alina Smith</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 10 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 50 Students
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
                  <Image src={coursesImg9} alt="courses" />
                </a>
              </Link>
              <div className="content">
                <div className="price">$69</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    <a>Medical Terminology - Start Basic Learning Course</a>
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={usersImg3} alt="author" />
                      </div>
                      <span>James Andy</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 09 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 41 Students
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
