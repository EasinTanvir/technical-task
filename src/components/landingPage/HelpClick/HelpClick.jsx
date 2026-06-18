import React from "react";
import { motion } from "framer-motion";

import PricingCard from "./PricingCard";
import Container from "../../shared/Container";
import Heading from "../../ui/Heading";
import { pricingPlans } from "../../../data/pricingPlans";
import Section from "../../shared/Section";
import { cardVariants } from "../../shared/animation/varaints";

const HelpClick = () => {
  return (
    <Section className="z-20 relative">
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
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="will-change-transform"
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HelpClick;
