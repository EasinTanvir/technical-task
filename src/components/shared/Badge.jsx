import React from "react";
import Image from "./Image";

const Badge = ({
  text,
  className = "",
  Isicon = false,
  icon,
  alt = "",
  iconContainerClassName = "",
  iconClassName = "",
}) => {
  return (
    <div
      className={`
        bg-badge-bg
        rounded-2xl
        py-2
        px-3
        max-w-fit
        lg:mx-0
        mx-auto
        ${Isicon ? "flex items-center gap-2" : ""}

        ${className}
      `}
    >
      {Isicon && icon && (
        <BadgeIcon
          icon={icon}
          alt={alt}
          iconContainerClassName={iconContainerClassName}
          iconClassName={iconClassName}
        />
      )}

      <span className="text-xs font-semibold text-badge-text">{text}</span>
    </div>
  );
};

export default Badge;

const BadgeIcon = ({
  icon,
  alt,
  iconContainerClassName = "",
  iconClassName = "",
}) => {
  return (
    <div
      className={`
        flex-center
        h-8
        w-8
        rounded-full
        bg-white
        shrink-0
        ${iconContainerClassName}
      `}
    >
      <Image
        src={icon}
        alt={alt}
        width={20}
        height={20}
        className={`w-5 ${iconClassName}`}
      />
    </div>
  );
};
