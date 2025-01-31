"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-6 z-50">
      <div className="flex flex-col gap-4 text-lg">
        <Link href="/" className="text-gray-400 hover:text-[#4B0082] transition">
        Home
        </Link>
        <Link href="/#about" className="text-gray-400 hover:text-[#4B0082] transition">
        About
        </Link>
        <Link href="/#portfolio"className=" text-gray-400 hover:text-[#4B0082] transition">
        Portfolio
        </Link>
        <Link href="/blog" className="text-[#8A2BE2] font-bold">
        Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;