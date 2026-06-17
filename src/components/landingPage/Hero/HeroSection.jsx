import React from "react";

import Container from "../../shared/Container";
import { heroBgImage } from "../../../constant";
import Heading from "../../ui/Heading";
import BannerImage from "./BannerImage";
import Text from "../../ui/Text";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden "
      aria-labelledby="hero-heading"
    >
      <BannerImage />

      <Container>
        <div className="relative z-10 flex min-h-122 md:min-h-150 xl:min-h-175 flex-col items-center justify-center text-center space-y-6 max-w-185 mx-auto">
          <Heading as="h1" id="hero-heading">
            RemoteRecruit's Difference
          </Heading>

          <Text size="lg" className=" text-heading-light font-medium">
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there’s nothing but you, your talents, and the next
            step in your career.
          </Text>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
