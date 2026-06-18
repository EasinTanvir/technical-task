// Question.jsx

import React from "react";
import { motion } from "framer-motion";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const Question = ({ question, answer, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 1,
        delay,
      }}
    >
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
    </motion.div>
  );
};

export default Question;
