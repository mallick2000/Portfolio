"use client";

import { Facebook, Instagram, Linkedin, Twitter, X, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-gray-800 py-5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-base tracking-wide text-teal-500">
          Subhranshu
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <li>
            <Link
              href="/"
              className="text-teal-500 border-b-2 border-teal-500 pb-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-teal-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-teal-500 transition">
              Resume
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className="hover:text-teal-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-teal-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600">
          <Twitter className="hover:text-black cursor-pointer" size={20} />
          <Facebook className="hover:text-black cursor-pointer" size={20} />
          <Instagram className="hover:text-black cursor-pointer" size={20} />
          <Linkedin className="hover:text-black cursor-pointer" size={20} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-medium">
          <Link href="/" className="block text-teal-500 px-2">
            Home
          </Link>
          <Link href="#about" className="block hover:text-teal-500 px-2">
            About
          </Link>
          <Link href="/resume" className="block hover:text-teal-500 px-2">
            Resume
          </Link>
          <Link href="#projects" className="block hover:text-teal-500 px-2">
            Projects
          </Link>

          <Link href="#contact" className="block hover:text-teal-500 px-2">
            Contact
          </Link>

          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-4 mt-4 px-2 text-gray-600">
            <Twitter className="hover:text-black cursor-pointer" size={20} />
            <Facebook className="hover:text-black cursor-pointer" size={20} />
            <Instagram className="hover:text-black cursor-pointer" size={20} />
            <Linkedin className="hover:text-black cursor-pointer" size={20} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
