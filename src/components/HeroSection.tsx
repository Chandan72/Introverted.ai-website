import { motion } from "framer-motion";
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

/**
 * HeroSection: Reusable hero with animated headline and gradient background.
 */
const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, children }) => (
  <section className="w-full bg-gradient-to-br from-[#001F3F] via-[#4682B4] to-white py-16 mb-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        className="text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {subtitle}
      </motion.p>
    )}
    {children}
  </section>
);

export default HeroSection;
