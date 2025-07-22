import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logos/introvertedai-main.png";

const menuItems = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Pricing", to: "/pricing" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
  { name: "FAQ", to: "/faq" },
];

/**
 * NavBar component: sticky, glassmorphism, animated underline, responsive.
 */
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/30 shadow-lg border-b border-white/20"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <motion.img
            src={logo}
            alt="INTROVERTED.AI Logo"
            className="h-8 w-8 rounded-lg shadow"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <span className="font-extrabold text-lg tracking-wide text-[#001F3F] drop-shadow-sm">
            INTROVERTED.AI
          </span>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-2 lg:space-x-6">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={item.name} className="relative">
                <Link
                  to={item.to}
                  className="px-3 py-2 font-medium text-base rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  tabIndex={0}
                >
                  <span
                    className={
                      isActive
                        ? "text-[#001F3F]"
                        : "text-gray-700 hover:text-[#001F3F]"
                    }
                  >
                    {item.name}
                  </span>
                  {/* Animated underline */}
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-gradient-to-r from-[#001F3F] to-[#4682B4]"
                    style={{ opacity: isActive ? 1 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#001F3F] mb-1.5 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#001F3F] mb-1.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#001F3F] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <motion.ul
        className={`md:hidden flex flex-col bg-white/80 backdrop-blur px-6 pb-4 space-y-2 shadow-lg border-t border-white/20 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={false}
        animate={
          isOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        {menuItems.map((item) => (
          <li key={item.name} className="relative">
            <Link
              to={item.to}
              className="block px-3 py-3 font-medium text-base rounded-lg text-[#001F3F] hover:bg-blue-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default NavBar;
