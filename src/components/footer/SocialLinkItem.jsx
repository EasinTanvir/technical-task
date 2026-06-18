import React from "react";
import { motion } from "framer-motion";

const SocialLinkItem = ({ href, icon, name, className = "" }) => {
  return (
    <motion.a
      href={href}
      aria-label={name}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`
        flex-center
        h-10
        w-10
        rounded-full
        bg-social-lnk-bg
        transition-colors
        duration-300
        hover:bg-social-lnk-bg/20
        hover:shadow-lg
        ${className}
      `}
    >
      <motion.img
        src={icon}
        alt={name}
        width={16}
        height={16}
        className="w-4"
        whileHover={{ rotate: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      />
    </motion.a>
  );
};

export default SocialLinkItem;
