import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar3 from "@/components/Layout/Navigations/Navbar3";
import Content from "@/components/Courses/Content";
import AppDownload from "@/components/Courses/AppDownload";
import FooterThree from "@/components/Layout/Footer/FooterThree";

const Index = () => {
  return (
    <>
      <PageTitle page="Services" />
      <Navbar3 />
      <div className="page-title-area style-two">
        <div className="container">
          <div className="page-title-content">
            {/* <span className="sub-title yellow-color">
              Learn at your own pace
            </span> */}
            <h1>Thématiques Leads </h1>
          </div>
        </div>
      </div>
      <Content />
      <FooterThree />
    </>
  );
};

export default Index;
