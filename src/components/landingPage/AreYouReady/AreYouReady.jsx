import React from "react";
import Container from "../../shared/Container";
import BackgroundImage from "./BackgroundImage";

import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import Button from "../../ui/Button";

import { arrowRightIcon } from "../../../constant";

const AreYouReady = () => {
  return (
    <section className="relative h-165 overflow-hidden">
      <BackgroundImage />

      <Container
        className="
            flex
            flex-col-reverse
            items-center
            gap-12    
            lg:flex-row
            lg:justify-end
            h-165
          "
      >
        <div
          className="
              w-full
               
              max-w-100
              text-center

              lg:text-left
            "
        >
          <Text
            as="p"
            className="
                font-semibold
                text-research-profile-title-one
              "
          >
            Are you ready?
          </Text>

          <Heading
            as="h2"
            className="
                mt-4
                text-badge-text
              "
          >
            Help is only a few clicks away!
          </Heading>

          <Text
            size="lg"
            className="
                mt-6
                text-are-you-ready-text
              "
          >
            Click Below to get set up super quickly and find help now!
          </Text>

          <Button
            className="
                mt-8
                flex-center           

                gap-3

                rounded-full
                bg-badge-bg

                p-2
                

                
              "
          >
            <span
              className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-research-profile-title-two
                "
            >
              <img
                src={arrowRightIcon}
                alt="arrowRightIcon"
                aria-hidden="true"
                className="w-4 mt-1"
              />
            </span>
            <span className="font-medium pe-4 text-research-profile-title-one">
              Get Started
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AreYouReady;
