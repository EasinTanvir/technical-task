import React from "react";

const BackgroundImage = ({
  src,
  width = 1440,
  height = 704,
  className = "",
}) => {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className={`
        absolute
        inset-0
        h-full
        w-full
        object-cover
        ${className}
      `}
    />
  );
};

export default BackgroundImage;
