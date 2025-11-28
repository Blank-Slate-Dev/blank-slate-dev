// components/header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibilityThreshold, setVisibilityThreshold] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    const updateThreshold = () => {
      const heroHeight = heroSection?.getBoundingClientRect().height ?? 0;
      if (heroHeight > 0) {
        setVisibilityThreshold(heroHeight * 0.75);
      }
    };

    updateThreshold();
    window.addEventListener("resize", updateThreshold, { passive: true });

    return () => {
      window.removeEventListener("resize", updateThreshold);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (visibilityThreshold === null) {
        setIsHeaderVisible(false);
        return;
      }

      setIsHeaderVisible(window.scrollY >= visibilityThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibilityThreshold]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none border-none"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <span className="sr-only">Blank Slate Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-800 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <nav className="flex flex-col gap-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-800 transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
