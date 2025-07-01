"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolledPastHero(window.scrollY > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;

    const isMobileView = window.innerWidth < 768;
    
    if (isMobileView) {
      // Mobile-specific precise scrolling
      const navbarHeight = 80; // Match your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - navbarHeight;
      
      // First jump close to the position (for mobile browsers)
      window.scrollTo(0, offsetPosition);
      
      // Then smooth scroll the remaining distance
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 10);
    } else {
      // Keep desktop behavior with offset
      const offset = 0;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }

    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Rates", href: "#rates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 backdrop-blur-md ${
        isScrolledPastHero ? "bg-white shadow-md" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#" className="z-50">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isScrolledPastHero ? "bg-moss_green" : "bg-white/20"
                }`}>
                  <span className={`font-serif text-xl font-bold ${
                    isScrolledPastHero ? "text-white" : "text-white"
                  }`}>
                    SB
                  </span>
                </div>
                <span className={`font-serif text-xl font-medium hidden sm:block transition-colors ${
                  isScrolledPastHero ? "text-black_olive" : "text-white"
                }`}>
                  Dr. Serena Blake
                </span>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden z-50 transition-colors ${
                isScrolledPastHero ? "text-black_olive" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`font-medium transition-colors ${
                    isScrolledPastHero
                      ? "text-black_olive hover:text-moss_green"
                      : "text-white hover:text-moss_green"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg absolute top-20 left-0 right-0 z-40 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    onClick={(e) => {
                      scrollToSection(e, item.href);
                    }}
                    className="block py-2 text-black_olive hover:text-moss_green font-medium text-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}