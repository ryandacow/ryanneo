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
    <nav className="fixed min-w-screen z-50 rounded-lg">
      <div className="flex mx-auto px-4 py-4 h-20 justify-around items-center">
        {/* daCow Blog (Top Left) */}
        <div className="text-2xl md:text-3xl font-bold font-playwrite text-gray-800">
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
                  : "bg-violet-200"
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
  <div className="fixed inset-0 z-[100] bg-[#f6ede6] flex flex-col items-center justify-center w-full h-full backdrop-blur-lg">
    {/* Close Button */}
    <button
      onClick={() => setIsMobileMenuOpen(false)}
      className="absolute top-6 right-8 text-gray-800 text-3xl"
    >
      <HiOutlineX />
    </button>

    {/* Title */}
    <div className="absolute top-6 left-10 text-xl font-playwrite font-bold">
      RyanNeo
    </div>

    {/* Dropdown Items */}
    <div className="flex flex-col px-6 py-4 gap-6 text-center">
      {predefinedTags.map((tag) => (
        <button
          key={tag}
          onClick={() => {
            setSelectedTag(tag);
            setIsMobileMenuOpen(false);
          }}
          className={`px-6 py-3 text-lg rounded-md transition ${
            selectedTag === tag
              ? "bg-violet-400 text-white"
                  : "bg-violet-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>

    {/* Time and Date (Mobile View) */}
    <div className="absolute bottom-10 text-gray-800 text-center">
      <div className="text-lg">{formattedTime} [SGT]</div>
      <div className="text-sm">{formattedDate}</div>
    </div>
  </div>
)}
    </nav>
  );
};

export default NavbarMin;