import React from "react";
import Link from 'next/link';
import PageTitle from "@/components/Layout/PageTitle";
import Navbar3 from "@/components/Layout/Navigations/Navbar3";
import FooterThree from "@/components/Layout/Footer/FooterThree";
import PrivacyPolicyContent from "@/components/privacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle page="Privacy Policy" />
      <Navbar3 />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Privacy Policy</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <PrivacyPolicyContent />
      <FooterThree />
    </>
  );
};

export default PrivacyPolicy;
