import React from "react";
import BackgroundImage from "../shared/BackgroundImage";
import Container from "../shared/Container";
import Divider from "../shared/Divider";

import { LogoImage, logoIconImage } from "../../constant";
import { socialLinks } from "../../data/socialLinks";
import { footerBg } from "../../constant";

const Footer = () => {
  return (
    <footer className="relative h-96 -mt-72">
      <BackgroundImage src={footerBg} className="-z-10" />

      {/* Top Content */}
      <Container>
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-8

            pt-52

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
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full

                  bg-white/10

                  transition-all
                  duration-300

                  hover:bg-white/20
                "
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  width={16}
                  height={16}
                  className="w-4"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Full Width Divider */}
      <Divider className="mt-10" />

      {/* Bottom Logo */}
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
