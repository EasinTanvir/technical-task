import React from "react";
import Container from "../../shared/Container";
import Heading from "../../ui/Heading";
import PricingCard from "./PricingCard";
import { pricingPlans } from "../../../data/pricingPlans";
import Section from "../../shared/Section";

const HelpClick = () => {
  return (
    <Section>
      <Container>
        <Heading
          as="h2"
          className="text-center! text-badge-text font-semibold!"
        >
          Help Is One Click Away
        </Heading>

        <div
          className="
            sm:mt-12
            mt-6
            grid
            gap-8

            lg:grid-cols-2
          "
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HelpClick;
