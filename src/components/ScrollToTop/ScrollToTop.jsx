import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <Button
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
      className="
        fixed
        bottom-6
        right-6
        z-50
        h-12
        w-12
        rounded-full
        p-0
        bg-empty-circle-yellow-bg
      text-heading-dark shadow-pricing-card-shadow
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
      "
    >
      <span className="text-xl font-bold">↑</span>
    </Button>
  );
};

export default ScrollToTop;
