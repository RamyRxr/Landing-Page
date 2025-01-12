/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Works from "./components/works";
import Prices from "./components/Prices";
import Rating from "./components/Rating";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection  />
        <Features />
        <Works />
        <Prices />
        <Rating />
        <Footer />
      </div>
    </>
  );
}

export default App;