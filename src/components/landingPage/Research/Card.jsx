import React from "react";
import { findWorkImage, profileImage } from "../../../constant";
import Profile from "./Profile";
import CircleLogo from "./CircleLogo";
import EmptyCircle from "./EmptyCircle";

const Card = () => {
  return (
    <div className="relative max-w-100 mx-auto p-4 shadow-research-card border border-research-card-border rounded-4xl h-120">
      <img
        src={findWorkImage}
        alt="RemoteRecruit dashboard showing available job listings for freelancers"
        loading="lazy"
        width={600}
        height={400}
        className="h-auto w-full  rounded-4xl"
      />
      <Profile
        className="absolute -left-17 top-60 z-10"
        designationClass="text-research-profile-title-one text-xs"
        designation="Python Developer"
        name="Felonious Gru"
        imageSrc={profileImage}
      />
      <Profile
        className="absolute -right-7.5 bottom-10  z-10"
        designationClass="text-research-profile-title-two text-xs"
        designation="Python Developer"
        name="Felonious Gru"
        imageSrc={profileImage}
      />

      <CircleLogo />
      <EmptyCircle />
    </div>
  );
};

export default Card;
