import React from "react";

import BackgroundImage from "../shared/BackgroundImage";
import Container from "../shared/Container";
import Divider from "../shared/Divider";

import { LogoImage, logoIconImage } from "../../constant";
import { socialLinks } from "../../data/socialLinks";
import { footerBg } from "../../constant";
import SocialLinkItem from "./SocialLinkItem";

const Footer = () => {
  return (
    <footer className="relative min-h-96 -mt-72 ">
      <BackgroundImage src={footerBg} className="-z-10" />

      {/* Top Content */}
      <Container
        className="
            flex
            flex-col
            items-center
            justify-between
            gap-8

            pt-72
            pb-10

            md:flex-row
          "
      >
        <img
          src={LogoImage}
          alt="RemoteRecruit"
          width={180}
          height={60}
          className="w-40 md:w-48"
        />

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <SocialLinkItem
              key={social.name}
              href={social.href}
              icon={social.icon}
              name={social.name}
            />
          ))}
        </div>
      </Container>

      {/* Full Width Divider */}
      <Divider className="mt-10" />

      <div className="flex justify-center py-4">
        <img
          src={logoIconImage}
          alt="RemoteRecruit Icon"
          width={40}
          height={40}
          className="w-8"
        />
      </div>
    </footer>
  );
};

export default Footer;
