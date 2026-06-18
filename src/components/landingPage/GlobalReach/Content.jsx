import React from "react";

import Badge from "../../shared/Badge";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const Content = () => {
  return (
    <div className="flex-1 lg:space-y-10 space-y-3">
      <Badge text="Global Reach" />

      <Heading as="h2" className="mt-8 text-heading-dark">
        The First Fully Global Job Board, Anywhere, Ever
      </Heading>

      <Text size="lg" className="text-research-text">
        RemoteRecruit connects candidates with opportunities around the world.
        With today’s remote-first workforce, you need to be able to find the
        best jobs and the best people for them, wherever they may be.
      </Text>
    </div>
  );
};

export default Content;
