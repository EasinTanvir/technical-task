import React from "react";

const EmptyCircle = ({ className = "" }) => {
  return (
    <div
      className={`w-6 h-6 bg-research-logo-circle-bg rounded-full ${className}`}
    ></div>
  );
};

export default EmptyCircle;
