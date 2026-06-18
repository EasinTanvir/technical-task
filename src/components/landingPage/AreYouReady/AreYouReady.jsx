import React from "react";
import Container from "../../shared/Container";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import Button from "../../ui/Button";

import { areYouReadyBgImage, arrowRightIcon } from "../../../constant";
import BackgroundImage from "../../shared/BackgroundImage";
import Section from "../../shared/Section";
import Content from "./Content";

const AreYouReady = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="relative w-full aspect-[1440/704]">
        <BackgroundImage src={areYouReadyBgImage} />

        <Content />
      </div>
    </Section>
  );
};

export default AreYouReady;
