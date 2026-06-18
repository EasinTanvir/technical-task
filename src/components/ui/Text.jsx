import React from "react";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "lg:text-lg text-sm",
  xl: "text-xl",
};

const Text = ({
  as: Tag = "p",
  children,
  size = "md",
  className = "sm:text-start text-center",
}) => {
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
