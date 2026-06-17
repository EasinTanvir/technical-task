import React from "react";
import { heroBgImage } from "../../constant";

const BannerImage = () => {
  return (
    <img
      src={heroBgImage}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      width={1440}
      height={704}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
};

export default BannerImage;
