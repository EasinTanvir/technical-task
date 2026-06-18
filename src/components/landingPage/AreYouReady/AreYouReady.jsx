import React from "react";
import Container from "../../shared/Container";
import BackgroundImage from "./BackgroundImage";

const AreYouReady = () => {
  return (
    <section className="h-165 relative overflow-hidden border">
      <BackgroundImage />
      <Container
        className=" border flex
            flex-col
            items-center
            gap-12
            lg:flex-row
            lg:items-center
            lg:justify-between"
      >
        <div className="flex-1 border">AreYouReady</div>
        <div className="flex-1 border">AreYouReady</div>
      </Container>
    </section>
  );
};

export default AreYouReady;
