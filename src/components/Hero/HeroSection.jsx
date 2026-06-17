import React from "react";

import Container from "../shared/Container";
import { heroBgImage } from "../../constant";
import Heading from "../ui/Heading";
import BannerImage from "./BannerImage";
import Text from "../ui/Text";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <BannerImage />

      <Container>
        <div className="relative z-10 flex min-h-[500px] md:min-h-[700px] flex-col items-center justify-center text-center">
          <Heading
            as="h1"
            id="hero-heading"
            className="text-5xl font-bold text-white"
          >
            RemoteRecruit's Difference
          </Heading>

          <Text size="" className="mt-6 max-w-3xl text-lg text-white/90">
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them.
          </Text>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
