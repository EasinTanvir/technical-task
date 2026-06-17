import React from "react";
import Button from "../ui/Button";

const NavItems = () => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        className="
          text-heading-light
          hover:opacity-80
        "
      >
        Sign In
      </Button>

      <Button
        variant="primary"
        className="
          bg-primary-button
          text-heading-light
          rounded-[20px]
          hover:scale-105
          hover:brightness-110
        "
      >
        Sign Up
      </Button>
    </div>
  );
};

export default NavItems;
