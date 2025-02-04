"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Rotate arrowhead dynamically
      const angle = Math.atan2(
        e.clientY - window.innerHeight / 2,
        e.clientX - window.innerWidth / 2
      );
      gsap.to(cursor, { rotate: angle + "rad", duration: 0.1 });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
        <polygon points="0,0 100,50 0,100" fill="white" stroke="black" strokeWidth="4" />
      </svg>
    </div>
  );
};

export default CustomCursor;