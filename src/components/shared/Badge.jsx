import React from "react";

const Badge = ({ text, className = "" }) => {
  return (
    <div
      className={`bg-badge-bg rounded-2xl  max-w-fit py-2 px-3 ${className}`}
    >
      <span className="text-xs text-badge-text font-semibold"> {text}</span>
    </div>
  );
};

export default Badge;
