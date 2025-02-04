"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer to highlight the section currently in view
  useEffect(() => {
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
  }, []);

  // Format time as "12:03PM" and date as "4 February 2025"
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  let formattedTime = currentTime
    .toLocaleTimeString("en-US", timeOptions)
    .replace(" ", ""); // remove extra space before AM/PM
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = currentTime.toLocaleDateString("en-GB", dateOptions);

  // Define your nav links
  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "blog", label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#e5d5cb] z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 relative flex items-center">
        {/* Brand (Left) */}
        <div className="absolute left-0">
          <div className="text-2xl font-bold text-gray-800">RyanNeo</div>
        </div>

        {/* Center: Navigation Links */}
        <div className="mx-auto hidden md:flex gap-8 text-lg">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors hover:bg-gray-200 ${
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
                className={`px-3 py-2 rounded-md transition-colors hover:bg-gray-200 ${
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
        <div className="absolute right-0 hidden md:flex flex-col items-end">
          <div className="text-lg text-gray-800">{formattedTime} [SGT]</div>
          <div className="text-sm text-gray-800">{formattedDate}</div>
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute right-0 md:hidden">
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
        <div className="md:hidden bg-[#e5d5cb] shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-colors hover:bg-gray-200 ${
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-colors hover:bg-gray-200 ${
                    activeSection === link.id
                      ? "text-blue-600 font-bold"
                      : "text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="text-right mt-2">
              <div className="text-lg text-gray-800">{formattedTime} [SGT]</div>
              <div className="text-sm text-gray-800">{formattedDate}</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
