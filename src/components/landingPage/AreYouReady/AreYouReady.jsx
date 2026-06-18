import React from "react";
import Section from "../../shared/Section";
import BackgroundImage from "../../shared/BackgroundImage";
import Content from "./Content";
import AnimatedSection from "../../shared/animation/AnimatedSection";
import { areYouReadyBgImage } from "../../../constant";
const AreYouReady = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="relative w-full aspect-1440/704">
        <BackgroundImage src={areYouReadyBgImage} />

        <AnimatedSection
          direction="up"
          amount={0.4}
          className="absolute inset-0"
        >
          <Content />
        </AnimatedSection>
      </div>
    </Section>
  );
};
export default AreYouReady;
