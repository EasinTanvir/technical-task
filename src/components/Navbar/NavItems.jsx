import React from "react";
import Button from "../ui/Button";

const NavItems = () => {
  return (
    <div className="flex items-center gap-4">
      <Button className="text-heading-light text-sm font-semibold">
        Sign In
      </Button>

      <Button className="bg-primary-button text-heading-light text-sm font-semibold rounded-2xl py-2 px-2.5">
        Sign Up
      </Button>
    </div>
  );
};

export default NavItems;
