import React from "react";

import BackgroundImage from "../shared/BackgroundImage";
import Container from "../shared/Container";
import Divider from "../shared/Divider";

import { LogoImage, logoIconImage } from "../../constant";
import { socialLinks } from "../../data/socialLinks";
import { footerBg } from "../../constant";
import SocialLinkItem from "./SocialLinkItem";
import AnimatedSection from "../shared/animation/AnimatedSection";
import Image from "../shared/Image";

const Footer = () => {
  return (
    <footer className="relative min-h-96 -mt-72">
      <BackgroundImage src={footerBg} className="-z-10" />

      {/* Top Content */}
      <AnimatedSection direction="up" amount={0.3}>
        <Container
          className="
              flex
              flex-col
              items-center
              justify-between
              gap-8

              sm:pt-72
              py-78
              sm:pb-10
              pb-2

              md:flex-row
            "
        >
          <Image
            src={LogoImage}
            alt="RemoteRecruit"
            width={180}
            height={60}
            className="w-40 md:w-48"
          />

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <AnimatedSection
                key={social.name}
                direction="up"
                delay={0.15 + index * 0.06}
                amount={0.3}
                as="span"
                className="inline-block"
              >
                <SocialLinkItem
                  href={social.href}
                  icon={social.icon}
                  name={social.name}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Full Width Divider */}
      <Divider className="mt-10" />

      <AnimatedSection
        direction="up"
        amount={0.5}
        className="flex justify-center py-4"
      >
        <Image
          src={logoIconImage}
          alt="RemoteRecruit Icon"
          width={40}
          height={40}
          className="w-8"
        />
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
