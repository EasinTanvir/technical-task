import React from "react";
import { logoIconImage } from "../../constant";
import Image from "./Image";
const CircleLogo = ({
  className = "",
  image = logoIconImage,
  altText = "remoteRecruit_logo",
}) => {
  return (
    <div
      className={` w-16 h-16 p-2  rounded-full flex-center bg-research-logo-circle-bg  shadow-research-logo-circle ${className}`}
    >
      <Image
        src={image}
        alt={altText}
        width={140}
        height={40}
        className="w-full rounded-full"
      />
    </div>
  );
};

export default CircleLogo;
