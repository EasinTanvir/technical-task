import React from "react";

const Image = ({
  src,
  alt = "",
  width,
  height,
  className = "",
  priority = false,
  decorative = false,
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={decorative ? "" : alt}
      aria-hidden={decorative ? "true" : undefined}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={className}
      {...rest}
    />
  );
};

export default Image;
