import React from "react";
import { logoIconImage } from "../../../constant";
const CircleLogo = () => {
  return (
    <div className="w-22 h-22 rounded-full absolute -right-7.5 top-40 z-10   flex-center bg-research-logo-circle-bg  shadow-research-logo-circle">
      <img
        src={logoIconImage}
        alt="RemoteRecruit logo"
        width={140}
        height={40}
        className="w-11"
      />
    </div>
  );
};

export default CircleLogo;
