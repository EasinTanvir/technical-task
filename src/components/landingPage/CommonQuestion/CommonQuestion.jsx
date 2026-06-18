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
          {commonQuestions.map((item, index) => (
            <Question
              key={item.id}
              question={item.question}
              answer={item.answer}
              delay={index * 0.1}
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
    font-semibold
    rounded-2xl
    lg:p-4.5
    p-2.5
    sm:text-base
    text-sm

    transition-all
    duration-300
    ease-out

    hover:bg-common-question-border-color
    hover:text-white
    hover:-translate-y-0.5
    hover:shadow-lg

    active:translate-y-0
    active:scale-[0.98]
  "
        >
          More Questions
        </Button>
      </Container>
    </Section>
  );
};

export default CommonQuestion;
