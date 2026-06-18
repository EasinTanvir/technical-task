import React from "react";
import { motion } from "framer-motion";
import { LogoImage } from "../../constant";

const BrandLogo = () => {
  return (
    <motion.a
      href="/"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
      className="flex items-center"
      aria-label="RemoteRecruit home"
    >
      <img
        src={LogoImage}
        alt="RemoteRecruit logo"
        width={140}
        height={40}
        className="md:w-auto w-22"
      />
    </motion.a>
  );
};

export default BrandLogo;
