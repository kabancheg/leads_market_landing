import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar from "@/components/Layout/Navigations/Navbar1";
import LeftSidebarContent from "@/components/Blog/LeftSidebarContent";
import FooterOne from "@/components/Layout/Footer/FooterOne";

const BlogLeftSidebar = () => {
  return (
    <>
      <PageTitle page="Blog left sidebar" />
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title red-light-color">Blog left sidebar</span>
            <h1>Our latest articles & resources</h1>
          </div>
        </div>
      </div>
      <LeftSidebarContent />
      <FooterOne />
    </>
  );
};

export default BlogLeftSidebar;
