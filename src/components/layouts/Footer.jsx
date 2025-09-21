import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="text-lg font-semibold text-gray-800 dark:text-white">
          © 2025 YourName.dev
        </div>

        {/* Middle: Navigation Links */}
        <nav className="flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
          <a href="#about" className="hover:text-indigo-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-600 transition">
            Projects
          </a>
          <a href="#tech-stack" className="hover:text-indigo-600 transition">
            Tech Skills
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/mallick2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/subhranshu-mallick-1701b6289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:subhranshumallick56@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
