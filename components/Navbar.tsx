"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100"
          : "bg-white border-b border-purple-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="font-playfair text-lg font-bold text-gold-400">V</span>
            </div>
            <div>
              <span className="font-playfair text-lg font-semibold text-purple-500">
                Vinpy <span className="text-gold-400">Hotels</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-gray-600 hover:text-purple-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-purple-500 text-white font-inter text-sm px-5 py-2.5 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-purple-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-purple-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-gray-700 hover:text-purple-500 py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-purple-500 text-white font-inter text-sm px-5 py-2.5 rounded-lg text-center hover:bg-purple-600 transition-colors mt-2"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
