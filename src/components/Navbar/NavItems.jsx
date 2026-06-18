import React from "react";
import Button from "../ui/Button";

const NavItems = () => {
  return (
    <div className="flex items-center gap-4">
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
    hover:scale-[1.02]
  "
      >
        Sign Up
      </Button>
    </div>
  );
};

export default NavItems;
