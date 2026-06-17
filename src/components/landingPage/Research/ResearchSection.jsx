import React from "react";

import ReSearchContent from "./ReSearchContent";
import ReSearchImage from "./ReSearchImage";
import Container from "../../shared/Container";

const ResearchSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div
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
          <ReSearchContent />
          <ReSearchImage />
        </div>
      </Container>
    </section>
  );
};

export default ResearchSection;
