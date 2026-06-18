import React from "react";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const Question = ({ question, answer }) => {
  return (
    <div>
      <Heading as="h3" className="text-badge-text">
        {question}
      </Heading>

      <Text
        className="
          sm:mt-4 mt-1
          text-common-question-ans-text
          leading-8 text-start
          sm:text-base text-sm
        "
      >
        {answer}
      </Text>
    </div>
  );
};

export default Question;
