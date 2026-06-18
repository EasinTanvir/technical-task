import React from "react";
import Container from "../../shared/Container";

import TierCard from "./TierCard";
import FreeForever from "./FreeForever";
import Section from "../../shared/Section";
import AnimatedSection from "../../shared/animation/AnimatedSection";

const MemberShip = () => {
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
        <AnimatedSection direction="up" className="flex-1">
          <TierCard />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.15} className="flex-1">
          <FreeForever />
        </AnimatedSection>
      </Container>
    </Section>
  );
};

export default MemberShip;
