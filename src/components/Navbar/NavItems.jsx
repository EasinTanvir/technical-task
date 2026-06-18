import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const NavItems = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center gap-4"
    >
      <motion.div variants={itemVariants}>
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
        variants={itemVariants}
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
