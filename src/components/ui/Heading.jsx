import React from "react";

const Heading = ({ as: Tag = "h2", children, className = "" }) => {
  const styles = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-2xl md:text-3xl font-semibold",
    h4: "text-xl md:text-2xl font-semibold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
  };

  return <Tag className={`${styles[Tag]} ${className}`}>{children}</Tag>;
};

export default Heading;
