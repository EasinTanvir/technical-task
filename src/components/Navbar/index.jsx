import React from "react";
import BrandLogo from "./BrandLogo";
import NavItems from "./NavItems";
import Container from "../shared/Container";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50  py-6">
      <nav aria-label="Main Navigation">
        <div className="flex justify-between w-full items-center sm:px-10 px-4">
          <BrandLogo />
          <NavItems />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
