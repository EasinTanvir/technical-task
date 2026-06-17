import React from "react";
import CircleLogo from "../../shared/CircleLogo";
import EmptyCircle from "../../shared/EmptyCircle";
import Profile from "../GlobalReach/Profile";
import Heading from "../../ui/Heading";

import { profileImage } from "../../../constant";
import { membershipFeatures } from "../../../data/membershipFeatures";
import FeatureItem from "./FeatureItem";

const TierCard = () => {
  return (
    <div className="flex-1">
      <div
        className="
          relative
          mx-auto
          h-120
          max-w-85
          rounded-[34px]
          border
          border-research-card-border
          p-7
          shadow-research-card
        "
      >
        <p className="text-xs font-semibold   text-member-ship-text">
          Your Membership Tier
        </p>

        <Heading
          as="h3"
          className="mt-2 text-primary membership-heading font-semibold text-lg md:text-xl"
        >
          Premium
        </Heading>

        <div className="mt-6">
          <p className="mb-4 text-[10px] font-bold uppercase  text-member-ship-text">
            Features
          </p>

          <ul className="space-y-4">
            {membershipFeatures.map((feature) => (
              <FeatureItem key={feature} title={feature} />
            ))}
          </ul>
        </div>

        <CircleLogo
          className="
            absolute
            -right-4
            top-20
            sm:-right-7.5
          "
        />

        <EmptyCircle
          className="
            absolute
            -left-4
            -top-2
            sm:-left-12
            sm:top-0
          "
        />

        <Profile
          className="
            absolute
            -left-4
            bottom-6
            sm:-left-17
          "
          designationClass="text-research-profile-title-one text-xs"
          designation="Upcoming Payment In..."
          name="14 Days - $79.99"
          imageSrc={profileImage}
        />
      </div>
    </div>
  );
};

export default TierCard;
