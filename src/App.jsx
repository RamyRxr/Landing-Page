/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Works from "./components/works";
import Prices from "./components/Prices";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection  />
        <Features />
        <Works />
        <Prices />
      </div>
    </>
  );
}

export default App;