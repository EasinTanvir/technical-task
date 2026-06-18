import React from "react";

import Container from "../../shared/Container";
import ShowCaseTalent from "./ShowCaseTalent";
import JobCompletion from "./JobCompletion";

const CustomProfile = () => {
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
        <ShowCaseTalent />
        <JobCompletion />
      </Container>
    </section>
  );
};

export default CustomProfile;
