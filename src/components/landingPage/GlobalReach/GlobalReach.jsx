import React from "react";

import Container from "../../shared/Container";
import Content from "./Content";
import FindWork from "./FindWork";
import Section from "../../shared/Section";

const GlobalReach = () => {
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
        <Content />
        <FindWork />
      </Container>
    </Section>
  );
};

export default GlobalReach;
