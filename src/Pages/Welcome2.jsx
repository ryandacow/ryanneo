"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const WelcomePage2 = ({ onComplete }) => {
  const welcomeRef = useRef(null);
  const buttonRef = useRef(null);

  // Initialize animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate welcome text from opacity 0 to 1
      gsap.fromTo(
        ".welcome-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
      );

      // Animate button entrance
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0, rotation: -15 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "elastic.out(1.2, 0.5)" }
      );
    }, welcomeRef);

    return () => ctx.revert();
  }, []);

  const enterSite = async () => {
    const tl = gsap.timeline();

    // Step 1: Swipe effect (left to right)
    const swipe = buttonRef.current.querySelector(".swipe-effect");
    tl.to(swipe, {
      width: "100%",  // Make it swipe fully from left to right
      duration: 0.5,
      ease: "power2.out",
    });

    // Step 2: Fade out button text
    const buttonText = buttonRef.current.querySelector("span");
    if (buttonText) {
      tl.to(buttonText, { opacity: 0, duration: 0.3 }, "-=0.3");
    }

    // Step 3: Morph the button into a circle
    tl.to(
      buttonRef.current,
      {
        duration: 0.8,
        scale: 1.2,
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        ease: "power2.inOut"
      },
      "-=0.5"
    );

    // Step 4: Fade out the welcome screen
    await tl.to(welcomeRef.current, {
      duration: 1,
      opacity: 0,
      onComplete: () => onComplete?.()
    });
  };

  return (
    <div style={{ backgroundColor: "#f6ede6" }} className="h-screen w-full relative">
      {/* Welcome Screen */}
      <div ref={welcomeRef} className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center space-y-6 overflow-hidden">
          <h1 className="welcome-text text-5xl md:text-6xl font-times tracking-wider text-gray-800">
            RyanNeo | Portfolio
          </h1>
          <p className="welcome-text text-xl md:text-2xl text-gray-600">
            Elevation through Tech
          </p>
        </div>

        <button
          ref={buttonRef}
          onClick={enterSite}
          className="mt-12 px-8 py-4 bg-gray-800 text-white rounded-full 
                   hover:bg-gray-900 transition-colors duration-300 
                   flex items-center gap-2 group overflow-hidden relative"
        >
          <span>Enter Portfolio</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          {/* Swipe effect */}
          <div className="swipe-effect absolute top-0 left-0 w-0 h-full bg-gray-600 transition-all duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default WelcomePage2;
