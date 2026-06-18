import React from "react";

import Badge from "../../shared/Badge";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const ShowCaseTalent = () => {
  return (
    <div className="flex-1  lg:space-y-7 space-y-3">
      <Badge text="Custom Profile" />

      <Heading
        as="h2"
        className="
       
          text-heading-dark          
        "
      >
        Showcase Your Talents
      </Heading>

      <Text
        size="lg"
        className="          
          max-w-120
          text-research-text        
        "
      >
        Personalize your profile with everything that makes you unique. Add an
        introductory video and other media for a personal touch that stands out
        to employers and candidates.
      </Text>
    </div>
  );
};

export default ShowCaseTalent;
