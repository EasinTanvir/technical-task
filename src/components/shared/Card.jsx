import React from "react";
import { findWorkImage } from "../../constant";

const Card = ({ children }) => {
  return (
    <div className="relative max-w-90 mx-auto p-4 shadow-research-card border border-research-card-border rounded-4xl h-120">
      <img
        src={findWorkImage}
        alt="RemoteRecruit dashboard showing available job listings for freelancers"
        loading="lazy"
        width={600}
        height={400}
        className="h-auto w-full  rounded-4xl"
      />
      {children}
    </div>
  );
};

export default Card;
