import React from "react";
import BackgroundImage from "../shared/BackgroundImage";
import { footerBg } from "../../constant";

const Footer = () => {
  return (
    <footer className="relative h-96 -mt-72">
      <BackgroundImage src={footerBg} className="-z-10" />
    </footer>
  );
};

export default Footer;
