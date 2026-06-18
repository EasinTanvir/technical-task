import React from "react";

import Container from "../../shared/Container";
import ShowCaseTalent from "./ShowCaseTalent";
import JobCompletion from "./JobCompletion";
import Section from "../../shared/Section";

const CustomProfile = () => {
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
        <ShowCaseTalent />
        <JobCompletion />
      </Container>
    </Section>
  );
};

export default CustomProfile;
