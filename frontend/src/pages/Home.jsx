import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import FeatureCards from "../components/FeatureCards";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <FeatureCards />
    </main>
  );
}
