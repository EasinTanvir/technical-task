import React from "react";

import Navbar from "../Navbar";
import Footer from "../footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const RootLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default RootLayout;
