import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
