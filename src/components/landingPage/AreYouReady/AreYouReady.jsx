import React from "react";
import Container from "../../shared/Container";
import BackgroundImage from "./BackgroundImage";

import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import Button from "../../ui/Button";

import { arrowRightIcon } from "../../../constant";
import EmptyCircle from "../../shared/EmptyCircle";

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
                  h-8.5
                  w-8.5
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

      <EmptyCircle className=" absolute  bottom-16 right-40 z-10" />
      <EmptyCircle className=" absolute  top-10 left-50 z-10 bg-empty-circle-yellow-bg! w-10 h-10 " />
    </section>
  );
};

export default AreYouReady;
