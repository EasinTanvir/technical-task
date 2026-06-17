import React from "react";
import Container from "../../shared/Container";

import TierCard from "./TierCard";
import FreeForever from "./FreeForever";

const MemberShip = () => {
  return (
    <section className="py-16 md:py-24">
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
    </section>
  );
};

export default MemberShip;
