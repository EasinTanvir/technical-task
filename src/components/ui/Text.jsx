import React from "react";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "lg:text-lg text-sm",
  xl: "text-xl",
};

const Text = ({ as: Tag = "p", children, size = "md", className = "" }) => {
  return (
    <Tag
      className={`
        lg:text-start text-center       
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export default Text;
