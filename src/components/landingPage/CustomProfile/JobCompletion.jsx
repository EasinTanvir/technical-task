import React from "react";
import Card from "../../shared/Card";
import ProfileStateCard from "../../shared/ProfileStateCard";
import CircleLogo from "../../shared/CircleLogo";
import EmptyCircle from "../../shared/EmptyCircle";
import { findWorkImage, profileImage } from "../../../constant";

const JobCompletion = () => {
  return (
    <div className="flex-1">
      <Card image={findWorkImage}>
        <ProfileStateCard
          className="absolute sm:-left-17 -left-4 top-60 z-10"
          designationClass="text-research-profile-title-one text-xs"
          designation="Python Developer"
          name="Felonious Gru"
          imageSrc={profileImage}
        />
        <ProfileStateCard
          className="absolute sm:-right-7.5 -right-4 bottom-10  z-10"
          designationClass="text-research-profile-title-two text-xs"
          designation="Python Developer"
          name="Felonious Gru"
          imageSrc={profileImage}
        />

        <CircleLogo className=" absolute sm:-right-7.5 -right-4 top-40 z-10 " />
        <EmptyCircle className=" absolute sm:-left-12 -left-4 sm:top-0 -top-2 z-10" />
      </Card>
    </div>
  );
};

export default JobCompletion;
