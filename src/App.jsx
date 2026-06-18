import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/landingPage/Hero/HeroSection";
import RootLayout from "./components/layouts/RootLayout";
import GlobalReach from "./components/landingPage/GlobalReach/GlobalReach";
import MemberShip from "./components/landingPage/MemberShip/MemberShip";
import CustomProfile from "./components/landingPage/CustomProfile/CustomProfile";
import AreYouReady from "./components/landingPage/AreYouReady/AreYouReady";

const App = () => {
  return (
    <RootLayout>
      <HeroSection />
      <GlobalReach />
      <MemberShip />
      <CustomProfile />
      <AreYouReady />
    </RootLayout>
  );
};

export default App;
