import React from "react";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const Profile = ({
  className = "",
  designation,
  designationClass,
  name,
  imageSrc,
}) => {
  return (
    <div
      className={`
        flex items-center gap-4
        rounded-[40px]
        border border-research-card-border
        bg-white
        px-4 py-2
        shadow-research-card
        min-w-full
        sm:max-w-100
        max-w-90
        ${className}
      `}
    >
      <img
        src={imageSrc}
        alt={name}
        loading="lazy"
        width={64}
        height={64}
        className="
          h-14
          w-14
          shrink-0
          research-card-circle-border-gradient      
          shadow-research-card
          object-cover
        "
      />

      <div>
        <Text as="p" size="sm" className={designationClass}>
          {designation}
        </Text>

        <Heading as="h3" className=" mt-1 text-badge-text text-lg!">
          {name}
        </Heading>
      </div>
    </div>
  );
};

export default Profile;
