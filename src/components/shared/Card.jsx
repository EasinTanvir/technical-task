import React from "react";
import { findWorkImage } from "../../constant";
import Image from "./Image";

const Card = ({ children, image, altText, className = "" }) => {
  return (
    <div
      className={`relative max-w-85 mx-auto p-4 shadow-research-card border border-research-card-border rounded-4xl h-110 ${className}`}
    >
      <Image
        src={image}
        alt={altText}
        width={600}
        height={400}
        className="h-auto w-full rounded-4xl"
      />
      {children}
    </div>
  );
};

export default Card;
