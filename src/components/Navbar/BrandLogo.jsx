import React from "react";
import { LogoImage } from "../../constant";

const BrandLogo = () => {
  return (
    <a href="/" className="flex items-center" aria-label="RemoteRecruit home">
      <img
        src={LogoImage}
        alt="RemoteRecruit logo"
        width={140}
        height={40}
        className="md:w-auto w-22"
      />
    </a>
  );
};

export default BrandLogo;
