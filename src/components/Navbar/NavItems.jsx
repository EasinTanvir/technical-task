import React from "react";
import { motion } from "framer-motion";

import Button from "../ui/Button";
import {
  navContainerVariants,
  navItemVariants,
} from "../shared/animation/varaints";

const NavItems = () => {
  return (
    <motion.div
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-4"
    >
      <motion.div variants={navItemVariants}>
        <Button
          className="
            text-heading-light
            text-sm
            font-semibold
            transition-opacity
            duration-300
            hover:opacity-80
          "
        >
          Sign In
        </Button>
      </motion.div>

      <motion.div
        variants={navItemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          className="
            bg-primary-button
            text-heading-light
            text-sm
            font-semibold
            rounded-2xl
            py-2
            px-2.5
            transition-all
            duration-300
          "
        >
          Sign Up
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default NavItems;
