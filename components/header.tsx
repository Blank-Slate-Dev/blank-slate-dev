"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight || 1;

      // Show the header after the user has scrolled ~3/4 of the first screen
      const threshold = viewportHeight * 0.75;
      const shouldBeVisible = scrollY >= threshold;

      setIsVisible(shouldBeVisible);

      controls.start({
        opacity: shouldBeVisible ? 1 : 0,
        y: shouldBeVisible ? 0 : -24,
        transition: { duration: 0.35, ease: "easeOut" },
      });
    };

    // Run once on mount so the header state matches initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={controls}
      // Fixed header, dark translucent background, NO white bar
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
      // When invisible, don't intercept clicks on the hero section
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
        {/* Left: wordmark / logo text */}
        <Link href="/" className="flex items-center gap-3">
          <Logo width={120} height={120} className="h-10 w-auto drop-shadow" />
          <span className="sr-only">Blank Slate Dev</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-zinc-100 shadow-sm backdrop-blur md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-black/90 px-6 pb-4 pt-2 text-sm text-zinc-100 shadow-lg backdrop-blur md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-1 py-1.5 transition-colors hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
