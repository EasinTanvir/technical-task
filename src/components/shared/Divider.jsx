import React from "react";

const Divider = ({ className = "" }) => {
  return (
    <div
      className={`
        h-px
        w-full
        bg-divider-color
        ${className}
      `}
    />
  );
};

export default Divider;
