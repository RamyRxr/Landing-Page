import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Works from "./components/works";
import Prices from "./components/Prices";
import Rating from "./components/Rating";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="hero-section">
          <HeroSection />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="prices">
          <Prices />
        </section>
        <section id="rating">
          <Rating />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;