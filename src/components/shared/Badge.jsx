import React from "react";

const Badge = ({ children }) => {
  return (
    <div className="bg-primary-button rounded-2xl text-sm text-badge-text font-semibold">
      {children}
    </div>
  );
};

export default Badge;
