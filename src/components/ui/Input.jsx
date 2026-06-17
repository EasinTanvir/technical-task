import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`
        w-full
        rounded-lg
        border
        border-gray-300
        px-4
        py-3
        outline-none
        transition-all
        focus:border-black
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
