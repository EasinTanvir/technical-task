import React from "react";

import Container from "./Container";

const Section = ({ children, className = "" }) => {
  return (
    <section className={`overflow-hidden py-10 sm:py-14 lg:py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
