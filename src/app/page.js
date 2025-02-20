"use client";

import { useState, useEffect } from "react";
import WelcomePage2 from "./Pages/Welcome2";
import Navbar from "./Components/NavBar";
import Hero from "./Pages/Hero";
import About from "./Components/About";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Components/Footer";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isClient, setIsClient] = useState(false); // Ensure client-side rendering

  useEffect(() => {
    setIsClient(true); // Ensures this runs only in the browser

    if (typeof window !== "undefined") {
      const lastVisit = localStorage.getItem("lastWelcomeTimestamp");
      const now = new Date().getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (lastVisit && now - parseInt(lastVisit) < twentyFourHours) {
        setShowWelcome(false); // Skip welcome screen if within 24 hours
      }
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lastWelcomeTimestamp", new Date().getTime().toString());
    }
  };

  if (!isClient) return null; // Prevents Next.js from rendering on server

  return (
    <>
      {showWelcome ? (
        <WelcomePage2 onComplete={handleWelcomeComplete} />
      ) : (
        <>
          <Navbar />
          <main className="w-full min-w-full min-h-[100dvh] overflow-hidden bg-[#f5e4d7]">
            <Hero />
            <About />
            <Portfolio />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
