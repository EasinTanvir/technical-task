import React from "react";
import Card from "../../shared/Card";
import ProfileStateCard from "../../shared/ProfileStateCard";
import CircleLogo from "../../shared/CircleLogo";
import EmptyCircle from "../../shared/EmptyCircle";
import { jobImage, profileImage } from "../../../constant";
import Skills from "./Skills";
import { skillLists } from "../../../data/skills";

const JobCompletion = () => {
  return (
    <div className="flex-1">
      <Card image={jobImage} altText="Job completed dashboard snapshot">
        <ProfileStateCard
          className="absolute sm:-left-17 -left-4 top-60 z-10"
          designationClass="text-research-profile-title-one text-xs"
          designation="Past Client Feedback"
          name="Best Developer Ever!"
          imageSrc={profileImage}
        />

        <CircleLogo
          image={profileImage}
          altText="Felonious Gru"
          className=" absolute sm:-right-7.5 -right-4 top-40 z-10 "
        />
        <EmptyCircle className=" absolute sm:-left-12 -left-4 sm:top-0 -top-2 z-10" />

        <Skills skillLists={skillLists} />
      </Card>
    </div>
  );
};

export default JobCompletion;
