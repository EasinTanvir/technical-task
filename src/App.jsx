import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import RootLayout from "./components/layouts/RootLayout";

const App = () => {
  return (
    <RootLayout>
      <HeroSection />
    </RootLayout>
  );
};

export default App;
