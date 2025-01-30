"use client";

import WelcomePage from "./Pages/Welcome";
import Navbar from "./Components/NavBar";
import Hero from "./Pages/Hero";
import About from "./Components/About";
import Portfolio from "./Pages/Portfolio";
import { useState } from "react";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome ? (
        <WelcomePage onComplete={() => setShowWelcome(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Portfolio />
          </main>
        </>
      )}
    </>
  );
}