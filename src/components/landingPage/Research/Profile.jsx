import React from "react";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

const Profile = ({ className = "", designation, name, imageSrc }) => {
  return (
    <div
      className={`
        flex items-center gap-4
        rounded-[40px]
        border border-research-card-border
        bg-white
        px-4 py-3
        shadow-research-card
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
          rounded-full
          border-4
          border-yellow-400
          object-cover
        "
      />

      <div>
        <Text as="p" size="sm" className="font-medium text-primary">
          {designation}
        </Text>

        <Heading
          as="h3"
          className="
            mt-1
            text-heading-dark
            text-xl
            md:text-2xl
          "
        >
          {name}
        </Heading>
      </div>
    </div>
  );
};

export default Profile;
