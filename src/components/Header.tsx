"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Init theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = saved ? saved === "dark" : true;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("light", !prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 md:py-3 shadow-lg"
          : "bg-transparent py-2 md:py-5"
      }`}
      style={
        isScrolled
          ? {
              backgroundColor: "var(--background)",
              borderBottom: "1px solid var(--surface-border)",
            }
          : {}
      }
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo — no gradient, plain weight */}
        <Link
          href="#hero"
          className="text-lg md:text-2xl font-bold tracking-tight text-foreground"
        >
          Mushahid<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200 hover:scale-110"
            style={{
              borderColor: "var(--surface-border)",
              backgroundColor: "var(--surface)",
              color: "var(--foreground)",
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile: Theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border transition-all"
            style={{
              borderColor: "var(--surface-border)",
              backgroundColor: "var(--surface)",
              color: "var(--foreground)",
            }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden flex flex-col items-center py-8 gap-6 shadow-xl"
            style={{
              backgroundColor: "var(--background)",
              borderBottom: "1px solid var(--surface-border)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
