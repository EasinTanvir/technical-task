import React from "react";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { paypalIcon } from "../../constant";

const ProfileStateCard = ({
  className = "",
  designation,
  designationClass,
  name,
  imageSrc,
  isMemberShip = false,
}) => {
  return (
    <div
      className={`
        flex items-center gap-4
        rounded-[40px]
        border-research-card-border
        bg-heading-light
        px-4 py-2
        shadow-research-card
        min-w-full
        sm:max-w-100
        max-w-90
        ${className}
      `}
    >
      {!isMemberShip ? (
        <img
          src={imageSrc}
          alt={name}
          width={64}
          height={64}
          className="
          h-14
          w-14          
          research-card-circle-border-gradient      
          shadow-research-card
          object-cover
        "
        />
      ) : (
        <div
          className="
          h-14
          w-14
          shrink-0           
          shadow-research-card
          bg-membership-circle-badge-bg
           rounded-full
           overflow-hidden
           flex-center
          
        "
        >
          <img
            src={paypalIcon}
            alt="paypal_logo"
            width={40}
            height={40}
            className="
            w-6
               
         
        "
          />
        </div>
      )}

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

export default ProfileStateCard;
