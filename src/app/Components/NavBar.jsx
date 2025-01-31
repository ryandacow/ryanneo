"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">RyanNeo</div>
        <div className="flex gap-8 text-lg">
          <a href="#home" className="nav-link px-3 py-2 rounded-md">Home</a>
          <a href="#about" className="nav-link px-3 py-2 rounded-md">About</a>
          <a href="#portfolio" className="nav-link px-3 py-2 rounded-md">Portfolio</a>
          <Link href="/blog" className="nav-link px-3 py-2 rounded-md">Blog</Link> {/* ✅ Correct Next.js routing */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;