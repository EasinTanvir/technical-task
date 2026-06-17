import React from "react";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const Text = ({ as: Tag = "p", children, size = "md", className = "" }) => {
  return (
    <Tag
      className={`       
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export default Text;
