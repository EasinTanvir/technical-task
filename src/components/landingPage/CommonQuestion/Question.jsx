import React from "react";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const Question = ({ question, answer }) => {
  return (
    <div>
      <Heading as="h3" className="text-lg text-badge-text">
        {question}
      </Heading>

      <Text
        className="
          mt-4
          text-common-question-ans-text
          leading-8
        "
      >
        {answer}
      </Text>
    </div>
  );
};

export default Question;
