import React from "react";

import Container from "../../shared/Container";
import { heroBgImage } from "../../../constant";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import BackgroundImage from "../../shared/BackgroundImage";
import Section from "../../shared/Section";

const HeroSection = () => {
  return (
    <Section
      className="relative overflow-hidden "
      aria-labelledby="hero-heading"
    >
      <BackgroundImage src={heroBgImage} />

      <Container>
        <div className="relative z-10 flex min-h-100 sm:min-h-100 lg:min-h-120 xl:min-h-155 flex-col items-center justify-center text-center space-y-6 max-w-185 mx-auto">
          <Heading as="h1" id="hero-heading">
            RemoteRecruit's Difference
          </Heading>

          <Text
            size="lg"
            className=" text-heading-light font-medium text-center!"
          >
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there’s nothing but you, your talents, and the next
            step in your career.
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
