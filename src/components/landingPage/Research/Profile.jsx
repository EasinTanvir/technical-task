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
        min-w-100
        max-w-100
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
          h-16
          w-16
          shrink-0
          research-card-circle-border-gradient      
          shadow-research-card-shadow
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
