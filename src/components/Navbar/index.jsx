import React from "react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-0 left-0 w-full z-50 py-6"
    >
      <nav aria-label="Main Navigation">
        <div className="flex justify-between w-full items-center sm:px-10 px-4">
          <BrandLogo />
          <NavItems />
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
