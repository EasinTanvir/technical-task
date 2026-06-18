import React from "react";

import Container from "./Container";

const Section = ({ children, className = "" }) => {
  return (
    <section className={`py-10 md:py-24 ${className}`}>{children}</section>
  );
};

export default Section;
