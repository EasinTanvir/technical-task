import React from "react";
import Container from "../../shared/Container";
import Card from "../../shared/Card";
import HelpCard from "./HelpCard";
const HelpClick = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <HelpCard />
      </Container>
    </section>
  );
};

export default HelpClick;
