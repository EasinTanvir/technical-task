import React from "react";
import { motion } from "framer-motion";

import Container from "../../shared/Container";
import { heroBgImage } from "../../../constant";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import BackgroundImage from "../../shared/BackgroundImage";
import Section from "../../shared/Section";
import {
  bannerContainerVariants,
  bannerItemVariants,
} from "../../shared/animation/varaints";

const HeroSection = () => {
  return (
    <Section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <BackgroundImage src={heroBgImage} priority />
      </motion.div>

      <Container>
        <motion.div
          variants={bannerContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex min-h-100 sm:min-h-100 lg:min-h-120 xl:min-h-155 flex-col items-center justify-center text-center space-y-6 max-w-185 mx-auto"
        >
          <motion.div variants={bannerItemVariants}>
            <Heading as="h1" id="hero-heading">
              RemoteRecruit's Difference
            </Heading>
          </motion.div>

          <motion.div variants={bannerItemVariants}>
            <Text
              size="lg"
              className="text-heading-light font-medium text-center!"
            >
              RemoteRecruit is connecting the world with an easy-to-use platform
              that lets full-time, part-time, and freelance workers showcase
              their talents to businesses that need them. With no paywalls, no
              fees, and no barriers, there’s nothing but you, your talents, and
              the next step in your career.
            </Text>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default HeroSection;
