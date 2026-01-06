"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Paket Wisata", href: "#packages" },
    { name: "Keunggulan", href: "#why-us" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Galeri", href: "#gallery" },
  ];

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6")}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-montserrat">
          <span className={cn(isScrolled ? "text-primary-600" : "text-white")}>Travel</span>
          <span className="text-secondary-500">Trip</span>.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={cn("font-medium transition-colors hover:text-secondary-500", isScrolled ? "text-neutral-800" : "text-white/90")}>
              {link.name}
            </Link>
          ))}
          <Button size="sm" variant={isScrolled ? "primary" : "secondary"}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat Admin
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className={cn("md:hidden", isScrolled ? "text-neutral-800" : "text-white")} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-neutral-100 shadow-xl overflow-hidden">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="font-medium text-neutral-800 hover:text-secondary-500 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Button size="sm" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Admin
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
