import React from "react";

import Container from "../../shared/Container";
import Content from "./Content";
import FindWork from "./FindWork";

const GlobalReach = () => {
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
        <Content />
        <FindWork />
      </Container>
    </section>
  );
};

export default GlobalReach;
