import React from "react";
import Container from "../../shared/Container";
import Heading from "../../ui/Heading";
import PricingCard from "./PricingCard";
import { pricingPlans } from "../../../data/pricingPlans";
import Section from "../../shared/Section";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
};

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
