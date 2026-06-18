import React from "react";
import Container from "../../shared/Container";

import TierCard from "./TierCard";
import FreeForever from "./FreeForever";
import Section from "../../shared/Section";
import SectionReveal from "../../shared/animation/SectionReveal";

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
        <SectionReveal className="flex-1">
          <TierCard />
        </SectionReveal>

        <SectionReveal className="flex-1" delay={0.15}>
          <FreeForever />
        </SectionReveal>
      </Container>
    </Section>
  );
};

export default MemberShip;
