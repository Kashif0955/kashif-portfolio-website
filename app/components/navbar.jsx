"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-6">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            KASHIF
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-[#0d1224] shadow-lg p-5 transition-all duration-300 md:relative md:flex md:items-center md:space-x-6 md:p-0 md:shadow-none md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/#projects", label: "PROJECTS" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                className="block px-4 py-2 no-underline outline-none text-sm text-white transition-colors duration-300 hover:text-pink-600"
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
