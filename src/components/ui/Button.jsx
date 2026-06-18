import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`      
        ${className}
        cursor-pointer sm:text-base text-sm
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
