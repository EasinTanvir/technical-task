import React from "react";
import Container from "../../shared/Container";
import Question from "./Question";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import { commonQuestions } from "../../../data/commonQuestions";

const CommonQuestion = () => {
  return (
    <section className="py-16 md:py-24 z-40 relative">
      <Container>
        <Heading as="h2" className="text-badge-text">
          Common Questions
        </Heading>

        <div className="mt-12 space-y-10">
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
            mt-12
            border-2
            border-common-question-border-color
            bg-transparent
            text-research-profile-title-one
            hover:bg-common-question-border-color
            hover:text-white
            font-semibold
            rounded-2xl
            p-4.5
          "
        >
          More Questions
        </Button>
      </Container>
    </section>
  );
};

export default CommonQuestion;
