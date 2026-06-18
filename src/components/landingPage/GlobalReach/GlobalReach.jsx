import React from "react";

import Container from "../../shared/Container";
import Content from "./Content";
import FindWork from "./FindWork";
import Section from "../../shared/Section";
import AnimatedSection from "../../shared/animation/AnimatedSection";

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
        <AnimatedSection direction="left" className="flex-1">
          <Content />
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15} className="flex-1">
          <FindWork />
        </AnimatedSection>
      </Container>
    </Section>
  );
};

export default GlobalReach;
