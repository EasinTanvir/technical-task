import React from "react";
import { logoIconImage } from "../../constant";
const CircleLogo = ({ className = "" }) => {
  return (
    <div
      className={`sm:w-22 sm:h-22 w-16 h-16 rounded-full flex-center bg-research-logo-circle-bg  shadow-research-logo-circle ${className}`}
    >
      <img
        src={logoIconImage}
        alt="RemoteRecruit logo"
        width={140}
        height={40}
        className="sm:w-11 w-7"
      />
    </div>
  );
};

export default CircleLogo;
