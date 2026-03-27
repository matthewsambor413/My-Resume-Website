"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/lib/data/content";

const navLinks = [
  { label: "My Story", href: "/#story" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#222831]/95 backdrop-blur-md shadow-sm"
          : "bg-[#222831]/95 backdrop-blur-md"
      }`}
      style={{ borderBottom: `2px solid var(--teal)` }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "var(--cream)", fontFamily: "var(--font-red-rose)" }}
        >
          MS.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--cream)", fontFamily: "var(--font-public-sans)" }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/selected-work"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[0.97]"
            style={{
              backgroundColor: "var(--navy)",
              color: "var(--teal)",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Selected Work
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--navy)" }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "var(--navy)" }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--navy)" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-[#222831]/95 backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2 border-b"
              style={{
                color: "var(--navy)",
                borderColor: "var(--blush)",
                fontFamily: "var(--font-public-sans)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/selected-work"
            className="text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2"
            style={{
              backgroundColor: "var(--navy)",
              color: "var(--teal)",
              fontFamily: "var(--font-public-sans)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Selected Work
          </Link>
        </div>
      )}
    </header>
  );
}
