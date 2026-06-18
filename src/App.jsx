import React, { lazy } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/landingPage/Hero/HeroSection";
import RootLayout from "./components/layouts/RootLayout";
import GlobalReach from "./components/landingPage/GlobalReach/GlobalReach";
import MemberShip from "./components/landingPage/MemberShip/MemberShip";
import CustomProfile from "./components/landingPage/CustomProfile/CustomProfile";
import CommonQuestion from "./components/landingPage/CommonQuestion/CommonQuestion";

const AreYouReady = lazy(
  () => import("./components/landingPage/AreYouReady/AreYouReady"),
);

const HelpClick = lazy(
  () => import("./components/landingPage/HelpClick/HelpClick"),
);

const App = () => {
  return (
    <RootLayout>
      <HeroSection />
      <GlobalReach />
      <MemberShip />
      <CustomProfile />
      <AreYouReady />
      <CommonQuestion />
      <HelpClick />
    </RootLayout>
  );
};

export default App;
