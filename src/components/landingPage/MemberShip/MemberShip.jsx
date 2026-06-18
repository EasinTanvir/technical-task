import React from "react";
import Container from "../../shared/Container";

import TierCard from "./TierCard";
import FreeForever from "./FreeForever";
import Section from "../../shared/Section";

const MemberShip = () => {
  return (
    <Section>
      <Container
        className="flex
            flex-col
            items-center
            gap-12
            lg:flex-row
            lg:items-center
            lg:justify-between"
      >
        <TierCard />
        <FreeForever />
      </Container>
    </Section>
  );
};

export default MemberShip;
