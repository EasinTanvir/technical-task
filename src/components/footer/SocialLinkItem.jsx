import React from "react";

const SocialLinkItem = ({ href, icon, name, className = "" }) => {
  return (
    <a
      href={href}
      aria-label={name}
      className={`
        flex-center
        h-10
        w-10
        rounded-full
        bg-social-lnk-bg
        transition-all
        duration-300
        hover:bg-social-lnk-bg/20
        ${className}
      `}
    >
      <img src={icon} alt={name} width={16} height={16} className="w-4" />
    </a>
  );
};

export default SocialLinkItem;
