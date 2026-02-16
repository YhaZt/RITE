import React from "react";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section className="hero">
      <Carousel />
      <div className="hero-content">
        <h1>Welcome to RITE</h1>
        <p>Advancing Research, Innovation, and Community Impact</p>
        <a href="/about" className="hero-btn">About Us</a>
      </div>
    </section>
  );
}
