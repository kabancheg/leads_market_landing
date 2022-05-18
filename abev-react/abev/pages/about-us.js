import React from "react";
import Navbar3 from "@/components/Layout/Navigations/Navbar3";
import PageTitle from "@/components/Layout/PageTitle";
import AboutArea from "@/components/AboutUs/AboutArea";
import Overview from "@/components/AboutUs/Overview";
import WorkingProcess from "@/components/AboutUs/WorkingProcess";
import Funfacts from "@/components/AboutUs/Funfacts";
import Team from "@/components/AboutUs/Team";
import Partners from "@/components/AboutUs/Partners";
import GetStarted from "@/components/Common/GetStarted";
import FooterThree from "@/components/Layout/Footer/FooterThree";

const AboutUs = () => {
  return (
    <>
      <PageTitle page="About Us" />
      <Navbar3 />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title red-light-color">About Us</span>
            <h1>Hello World! This is Abev!</h1>
          </div>
        </div>
      </div>
      <AboutArea />
      <Overview />
      <WorkingProcess />
      <Funfacts />
      <Team />
      <Partners />
      <div className="ptb-100">
        <GetStarted />
      </div>
      <FooterThree />
    </>
  );
};

export default AboutUs;
