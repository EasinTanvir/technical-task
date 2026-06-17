import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/landingPage/Hero/HeroSection";
import RootLayout from "./components/layouts/RootLayout";
import ResearchSection from "./components/landingPage/Research/ResearchSection";

const App = () => {
  return (
    <RootLayout>
      <HeroSection />
      <ResearchSection />
    </RootLayout>
  );
};

export default App;
