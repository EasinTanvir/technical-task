import React from "react";

import Container from "../../shared/Container";
import ShowCaseTalent from "./ShowCaseTalent";
import JobCompletion from "./JobCompletion";
import Section from "../../shared/Section";
import SectionReveal from "../../shared/animation/SectionReveal";

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
        <SectionReveal className="flex-1">
          <ShowCaseTalent />
        </SectionReveal>

        <SectionReveal className="flex-1" delay={0.15}>
          <JobCompletion />
        </SectionReveal>
      </Container>
    </Section>
  );
};

export default CustomProfile;
