import React from "react";
import BrandLogo from "./BrandLogo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <BrandLogo />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Navbar;
