"use client";

import { useState, useEffect } from "react";
import WelcomePage2 from "./Pages/Welcome2";
import Navbar from "./Components/NavBar";
import Hero from "./Pages/Hero";
import About from "./Components/About";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Components/Footer";

export default function Home() {
  // useState is a React Hook that allows State Management. Cannot use Boolean because React tracks states in between renders
  const [showWelcome, setShowWelcome] = useState(true);     // Show Welcome Page by default
  const [isClient, setIsClient] = useState(false);          // Ensure client-side rendering

  // useEffect is another React Hook that is only ran when the static site is loaded on the browser i.e. after the Server is done rendering
  useEffect(() => {
    setIsClient(true); // Ensures this runs only in the browser i.e. Tells the page that we are on the client/browser

    if (typeof window !== "undefined") {        // Window only exists on the browser, so this acts as a double safety measure (good practice)
      const lastVisit = localStorage.getItem("lastWelcomeTimestamp");   // localStorage can only be accessed on the browser
      const now = new Date().getTime();                                 // Current time
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (lastVisit && now - parseInt(lastVisit) < twentyFourHours) {     // If lastVisit exists i.e. not first time AND less than 24 hours
        setShowWelcome(false); // Skip welcome screen if within 24 hours
      }
    }
  }, []);     // [] is a dependency array that tells useEffect to not re-run every render/refresh, [var] means rerun when var changes, absence of [] means rerun every refresh

  const handleWelcomeComplete = () => {
    setShowWelcome(false);                      // Get rid of welcome page once finished
    if (typeof window !== "undefined") {        // Safety measure
      localStorage.setItem("lastWelcomeTimestamp", new Date().getTime().toString());      // Leave a memory in local storage that this page has been visited before
    }
  };

  if (!isClient) return null; // Prevents Next.js from rendering on server by ensuring isClient is True else return null

  return (
    <>
      {showWelcome ? (      // ? is a ternary operator which means if True run <1> else run <2> for the case of    var ? ( <1> ) : ( <2> )
        // WelcomePage2 passes an onComplete function to the Parent page.js to activate handleWelcomeComplete when called
        <WelcomePage2 onComplete={handleWelcomeComplete} />
      ) : (
        <>
          <Navbar />
          <main className="w-full min-h-[100dvh] overflow-hidden bg-[#f6ede6]">
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
