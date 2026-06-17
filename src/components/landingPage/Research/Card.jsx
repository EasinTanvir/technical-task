import React from "react";
import { findWorkImage, profileImage } from "../../../constant";
import Profile from "./Profile";

const Card = () => {
  return (
    <div className=" relative max-w-100 mx-auto p-4 shadow-research-card border border-research-card-border rounded-4xl h-120">
      <img
        src={findWorkImage}
        alt="RemoteRecruit dashboard showing available job listings for freelancers"
        loading="lazy"
        width={600}
        height={400}
        className="h-auto w-full  rounded-4xl"
      />
      <Profile
        className="
      absolute
      left-[-100px]
      top-[240px]
      z-10
    "
        designation="Python Developer"
        name="Felonious Gru"
        imageSrc={profileImage}
      />
      <Profile
        className="
      absolute
      right-[-30px]
      bottom-[40px]
      z-10
    "
        designation="Python Developer"
        name="Felonious Gru"
        imageSrc={profileImage}
      />
    </div>
  );
};

export default Card;
