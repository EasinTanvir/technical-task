import React from "react";
import { areYouReadyBgImage } from "../../../constant";

const BackgroundImage = () => {
  return (
    <img
      src={areYouReadyBgImage}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      width={1440}
      height={704}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
};

export default BackgroundImage;
