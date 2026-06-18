import React from "react";
import Container from "../../shared/Container";
import Question from "./Question";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import { commonQuestions } from "../../../data/commonQuestions";
import Section from "../../shared/Section";

const CommonQuestion = () => {
  return (
    <Section className=" z-40 relative">
      <Container>
        <Heading as="h2" className="text-badge-text">
          Common Questions
        </Heading>

        <div className="sm:mt-12 mt-6 sm:space-y-10 space-y-6">
          {commonQuestions.map((item) => (
            <Question
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <Button
          className="
            sm:mt-12
            mt-5
            border-2
            border-common-question-border-color
            bg-transparent
            text-research-profile-title-one
            hover:bg-common-question-border-color
            hover:text-white
            font-semibold
            rounded-2xl
            lg:p-4.5 p-2.5
            sm:text-base text-sm
          "
        >
          More Questions
        </Button>
      </Container>
    </Section>
  );
};

export default CommonQuestion;
