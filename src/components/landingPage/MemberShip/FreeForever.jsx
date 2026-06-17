import React from "react";
import Badge from "../../shared/Badge";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const FreeForever = () => {
  return (
    <div className="flex-1">
      <Badge text="Actually Fee Free" />

      <Heading
        as="h2"
        className="
          mt-8
          text-heading-dark
          text-center
          md:text-left
        "
      >
        Fee-Free Forever
      </Heading>

      <Text
        size="lg"
        className="
          mt-6
          max-w-120
          text-research-text         
          text-center
          md:text-left
        "
      >
        We don't charge you fees and we don't put up paywalls. We're the bridge
        that connects job opportunities with the best candidates, with no
        middleman involved.
      </Text>
    </div>
  );
};

export default FreeForever;
