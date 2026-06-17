import React from "react";
import CircleLogo from "../../shared/CircleLogo";
import EmptyCircle from "../../shared/EmptyCircle";
import Text from "../../ui/Text";
import Profile from "../GlobalReach/Profile";
import { profileImage } from "../../../constant";
import Heading from "../../ui/Heading";
import ActiveTikIcon from "./ActiveTikIcon";

const TierCard = () => {
  return (
    <div className="flex-1">
      <div className="relative max-w-80 mx-auto p-4 shadow-research-card border border-research-card-border rounded-4xl h-120">
        <span>Your Membership Tier</span>
        <Heading as="h3">Premium</Heading>

        <CircleLogo className=" absolute sm:-right-7.5 -right-4 top-40 z-10 " />
        <EmptyCircle className=" absolute sm:-left-12 -left-4 sm:top-0 -top-2 z-10" />
        <Profile
          className="absolute sm:-left-17 -left-4 bottom-4 z-10"
          designationClass="text-research-profile-title-one text-xs"
          designation="Python Developer"
          name="Felonious Gru"
          imageSrc={profileImage}
        />

        <ActiveTikIcon />
      </div>
    </div>
  );
};

export default TierCard;
