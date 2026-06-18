import React from "react";

import Container from "../../shared/Container";
import Content from "./Content";
import FindWork from "./FindWork";
import Section from "../../shared/Section";
import SectionReveal from "../../shared/animation/SectionReveal";

const GlobalReach = () => {
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
          <Content />
        </SectionReveal>

        <SectionReveal className="flex-1" delay={0.15}>
          <FindWork />
        </SectionReveal>
      </Container>
    </Section>
  );
};

export default GlobalReach;
