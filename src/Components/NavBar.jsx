"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer to highlight the section currently in view
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observerOptions = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/personality") {
      setActiveSection("personality");
    }
  }, [pathname]);

  // Format time and date
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  let formattedTime = currentTime
    .toLocaleTimeString("en-US", timeOptions)
    .replace(" ", ""); // Remove extra space before AM/PM
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = currentTime.toLocaleDateString("en-GB", dateOptions);

  // Define nav links
  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "personality", label: "Personality", href: "/personality" },
  ];

  // Scroll handling function
  const handleScrollorRedirect = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 24; // Adjust for navbar height
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset, // Scroll to section position minus navbar height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-100 bg-[#f6ede6]">
      <div className="container mx-auto px-4 py-4 h-20 relative flex items-center">
        {/* Brand (Left) */}
        <div className="absolute left-0 items-start">
          <div className="text-2xl l:pl-0 pl-6 text-gray-800 font-bold font-playwrite">
            RyanNeo
          </div>
        </div>

        {/* Centered Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8 text-lg">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScrollorRedirect(link.id); // Trigger the smooth scroll for internal links
                }}
                className={`px-3 py-2 rounded-md transition-colors hover:bg-gray-300 ${
                  activeSection === link.id
                    ? "text-blue-600 font-bold"
                    : "text-gray-800"
                }`}
              >
                {link.label}
              </a>
            ) : (
              // For external links, use Link component without handleScrollorRedirect
              <Link
                key={link.id}
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors hover:bg-gray-300 ${
                  activeSection === link.id
                    ? "text-blue-600 font-bold"
                    : "text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Time/Date (Right) */}
        <div className="absolute right-0 l:pr-0 pr-6 hidden md:flex flex-col items-end">
          <div className="text-lg text-gray-800">{formattedTime} [SGT]</div>
          <div className="text-sm text-gray-800">{formattedDate}</div>
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute right-0 md:pr-0 pr-6 md:hidden justify-around">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <HiOutlineX className="w-8 h-8 text-gray-800" />
            ) : (
              <HiOutlineMenu className="w-8 h-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-md">
          <div className="fixed inset-0 z-[100] bg-[#f6ede6] flex flex-col items-center justify-center w-full h-full backdrop-blur-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-8 text-gray-800 text-3xl"
            >
              <HiOutlineX />
            </button>
            <div className="absolute top-6 left-10 text-xl font-playwrite font-bold">
              RyanNeo
            </div>
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollorRedirect(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md transition-colors hover:bg-gray-300 ${
                    activeSection === link.id
                      ? "text-blue-600 font-bold"
                      : "text-gray-800"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault(); // Only prevent default for internal links
                      handleScrollorRedirect(link.id);
                    }
                    setIsMobileMenuOpen(false); // Close the menu for all links
                  }}
                  className={`block px-3 py-2 rounded-md transition-colors hover:bg-gray-300 ${
                    activeSection === link.id
                      ? "text-blue-600 font-bold"
                      : "text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Time and Date (Mobile View) */}
            <div className="absolute bottom-10 text-gray-800 text-center">
              <div className="text-lg">{formattedTime} [SGT]</div>
              <div className="text-sm">{formattedDate}</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
