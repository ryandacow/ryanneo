"use client";

import { useState, useEffect } from "react";
import WelcomePage from "./Pages/Welcome";
import WelcomePage2 from "./Pages/Welcome2";
import Navbar from "./Components/NavBar";
import Hero from "./Pages/Hero";
import About from "./Components/About";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Components/Footer";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastWelcomeTimestamp");

    if (lastVisit) {
      const now = new Date().getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      // If last visit was less than 24 hours ago, skip welcome page
      if (now - parseInt(lastVisit) < twentyFourHours) {
        setShowWelcome(true);
      }
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    const now = new Date().getTime();
    localStorage.setItem("lastWelcomeTimestamp", now.toString()); // Save timestamp
  };

  return (
    <>
      {showWelcome ? (
        <WelcomePage2 onComplete={handleWelcomeComplete} />
      ) : (
        <>
          <Navbar />
          <main style={{ backgroundColor: "#e5d5cb" }}>
            <Hero />
            <About />
            <Portfolio />
          </main>
          <Footer /> {/* ✅ Add Footer at the bottom */}
        </>
      )}
    </>
  );
}