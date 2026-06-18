import React from "react";
import Container from "../../shared/Container";
import Heading from "../../ui/Heading";
import PricingCard from "./PricingCard";
import { pricingPlans } from "../../../data/pricingPlans";

const HelpClick = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Heading
          as="h2"
          className="text-center! text-badge-text font-semibold!"
        >
          Help Is One Click Away
        </Heading>

        <div
          className="
            mt-12
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
    </section>
  );
};

export default HelpClick;
