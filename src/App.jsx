import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/landingPage/Hero/HeroSection";
import RootLayout from "./components/layouts/RootLayout";
import GlobalReach from "./components/landingPage/GlobalReach/GlobalReach";

const App = () => {
  return (
    <RootLayout>
      <HeroSection />
      <GlobalReach />
    </RootLayout>
  );
};

export default App;
