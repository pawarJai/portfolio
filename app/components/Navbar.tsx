"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Manage mobile menu state

  const navItems = [
    { name: "Home", href: "#contactform" },
    { name: "Experience", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsMenuOpen(false); // Close menu after selecting an item
  };

  return (
    <header className="sticky top-0 bg-dark text-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary font-display">
              Jayesh's Portfolio
            </h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-dark shadow-md flex flex-col items-center space-y-4 py-6 lg:hidden">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => handleItemClick(item.name)}
                  className={clsx(
                    "text-lg font-medium transition-all duration-300 px-3 py-2 font-sans",
                    activeItem === item.name
                      ? "border border-primary rounded-md shadow-md"
                      : "",
                    "hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Hire Me Button */}
            <li>
              <Link
                href="#contact"
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => handleItemClick(item.name)}
                className={clsx(
                  "text-lg font-medium transition-all duration-300 px-3 py-2 font-sans",
                  activeItem === item.name
                    ? "border border-primary rounded-md shadow-md"
                    : "",
                  "hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Hire Me Button */}
          <li>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
