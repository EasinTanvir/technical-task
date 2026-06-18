import React from "react";
import Container from "../../shared/Container";
import Text from "../../ui/Text";
import Button from "../../ui/Button";
import { arrowRightIcon } from "../../../constant";
import Section from "../../shared/Section";

const Content = () => {
  return (
    <div className="absolute inset-0 flex items-center">
      <Container className="w-full flex justify-end">
        <div
          className="
                w-full                
                max-w-[150px]
                sm:max-w-[260px]
                md:max-w-[340px]
                lg:max-w-[400px]
                text-left
              "
        >
          <Text
            as="p"
            className="
                  font-semibold
                  text-[8px]
                  sm:text-xs
                  md:text-sm
                  text-research-profile-title-one
                "
          >
            Are you ready?
          </Text>

          <Heading
            as="h2"
            className="
                  mt-1
                  sm:mt-3
                  md:mt-4
                  text-base
                  sm:text-lg
                  md:text-2xl
                  lg:text-3xl                  
                  text-badge-text
                "
          >
            Help is only a few clicks away!
          </Heading>

          <Text
            size="lg"
            className="
                  mt-1
                  sm:mt-4
                  md:mt-6
                  text-[7px]
                  sm:text-xs
                  md:text-base
                  leading-snug
                  text-are-you-ready-text
                "
          >
            Click Below to get set up super quickly and find help now!
          </Text>

          <Button
            className="
                  mt-2
                  sm:mt-5
                  md:mt-8
                  flex
                  items-center
                  gap-1
                  sm:gap-2
                  md:gap-3
                  rounded-full
                  bg-badge-bg
                  p-1
                  sm:p-1.5
                  md:p-2
                "
          >
            <span
              className="
                    flex
                    h-4
                    w-4
                    sm:h-6
                    sm:w-6
                    md:h-8.5
                    md:w-8.5
                    items-center
                    justify-center
                    rounded-full
                    bg-research-profile-title-two
                  "
            >
              <img
                src={arrowRightIcon}
                alt=""
                aria-hidden="true"
                className="w-1.5 sm:w-2.5 md:w-4"
              />
            </span>
            <span
              className="
                    font-medium
                    text-[7px]
                    sm:text-xs
                    md:text-base
                    pe-1.5
                    sm:pe-3
                    md:pe-4
                    text-research-profile-title-one
                  "
            >
              Get Started
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Content;
