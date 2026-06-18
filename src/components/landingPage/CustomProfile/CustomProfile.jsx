import React from "react";
import Container from "../../shared/Container";
import ShowCaseTalent from "./ShowCaseTalent";
import JobCompletion from "./JobCompletion";
import Section from "../../shared/Section";
import AnimatedSection from "../../shared/animation/AnimatedSection";

const CustomProfile = () => {
  return (
    <Section>
      <Container
        className="
          flex
          flex-col
          items-center
          gap-12
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <AnimatedSection direction="right" className="flex-1">
          <ShowCaseTalent />
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.15} className="flex-1">
          <JobCompletion />
        </AnimatedSection>
      </Container>
    </Section>
  );
};

export default CustomProfile;
