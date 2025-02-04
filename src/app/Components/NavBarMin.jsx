"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavbarMin = ({ predefinedTags, selectedTag, setSelectedTag }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentTime = new Date();
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const formattedTime = currentTime
    .toLocaleTimeString("en-US", timeOptions)
    .replace(" ", ""); // Remove space before AM/PM
  const formattedDate = currentTime.toLocaleDateString("en-GB", dateOptions);

  return (
    <nav className="fixed min-w-screen z-50 bg-[#f5e4d7] rounded-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* daCow Blog (Top Left) */}
        <div className="text-2xl md:text-3xl font-bold text-gray-800">
          <Link href="/" className="hover:text-[#4B0082] transition">
            daCow Blog 🐮
          </Link>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-4 text-l">
          {predefinedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-3 rounded-md transition ${
                selectedTag === tag
                  ? "bg-violet-400 text-white"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 text-3xl"
          >
            {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Time and Date (Desktop View) */}
        <div className="hidden md:flex flex-col text-right">
          <div className="text-lg text-gray-800">{formattedTime} [SGT]</div>
          <div className="text-sm text-gray-800">{formattedDate}</div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f5e4d7] shadow-lg rounded-b-lg">
          <div className="flex flex-col px-6 py-4 gap-4">
            {predefinedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-md transition text-lg ${
                  selectedTag === tag
                    ? "bg-violet-400 text-white"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Time and Date (Mobile View) */}
          <div className="flex flex-col items-center py-4 text-gray-800 border-t border-gray-300">
            <div className="text-lg">{formattedTime} [SGT]</div>
            <div className="text-sm">{formattedDate}</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMin;