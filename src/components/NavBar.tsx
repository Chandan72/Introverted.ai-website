import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Pricing", to: "/pricing" },
  { name: "About", to: "#" },
  { name: "Contact", to: "#" },
  { name: "FAQ", to: "#" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#001F3F] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide select-none">
          INTROVERTED.AI
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer px-2 py-1 rounded transition-colors duration-200 hover:bg-white/10 hover:text-gray-200"
            >
              {item.to.startsWith("/") ? (
                <Link to={item.to}>{item.name}</Link>
              ) : (
                <a href={item.to}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-[#001F3F] px-6 pb-4 space-y-2 animate-fade-in-down">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer px-2 py-2 rounded transition-colors duration-200 hover:bg-white/10 hover:text-gray-200"
            >
              {item.to.startsWith("/") ? (
                <Link to={item.to} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ) : (
                <a href={item.to}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
