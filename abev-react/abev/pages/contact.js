import React from "react";
import PageTitle from "@/components/Layout/PageTitle";
import Navbar3 from "@/components/Layout/Navigations/Navbar3";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import FooterThree from "@/components/Layout/Footer/FooterThree";

const Contact = () => {
  return (
    <>
      <PageTitle page="Contact us" />
      <Navbar3 />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title red-light-color">Get in Touch</span>
            <h1>Connecting People With Knowledge</h1>
          </div>
        </div>
      </div>
      <ContactInfo />
      <ContactForm />
      <FooterThree />
    </>
  );
};

export default Contact;
