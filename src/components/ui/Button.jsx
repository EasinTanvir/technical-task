import React from "react";

const variants = {
  primary: "bg-black text-white hover:opacity-90",
  outline: "border border-black text-black hover:bg-black hover:text-white",
  ghost: "text-black hover:bg-gray-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        rounded-lg
        font-medium
        transition-all
        duration-300
        cursor-pointer
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
