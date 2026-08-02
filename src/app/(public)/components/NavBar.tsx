"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MainLogo from "./MainLogo";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <nav className={` px-6 lg:px-8 sticky top-0 z-50 transition-all duration-300 ${ isScrolled ? " backdrop-blur-lg shadow-lg" : " shadow-md" }`} >
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="lg:pr-10">
            <MainLogo/>
            </div>

            <div className="hidden md:flex items-center justify-center transform space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm 4xl:text-base text-text hover:text-secondary dark:hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px rounded-full bg-secondary dark:bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative z-50 size-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-heading transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-2" : "" }`}
              />
              <span
                className={`w-6 h-0.5 bg-heading transition-all duration-300 ease-in-out ${ isMobileMenuOpen ? "opacity-0" : "" }`}
              />
              <span
                className={`w-6 h-0.5 bg-heading transition-all duration-300 ease-in-out ${ isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "" }`}
              />
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <Link href="/login" className="px-4 py-2 text-dark-gray font-semibold hover:bg-linear-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent transition-colors duration-200">
                Log In
              </Link>
              <Link href="/register" className="gradient px-5 py-2 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel: fixed, transform-only slide, no max-height clipping */}
      <div
        className={`md:hidden fixed inset-0 top-20 w-full max-w-11/12 mx-auto z-40 origin-bottom transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <div className="bg-white shadow-lg border-t border-gray-100 px-4 sm:px-6 py-4 flex flex-col gap-1 rounded-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="px-2 py-3 text-sm text-text hover:text-primary font-medium transition-colors duration-200 border-b border-border last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="px-3 py-2 text-cent text-text font-semibold hover:primary transition-colors duration-200"
            >
              Log In
            </Link>
          <div className="flex flex-col gap-2 pt-1">
            {/* <Link
              href="/login"
              onClick={closeMobileMenu}
              className="px-4 py-2 text-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 border border-blue-600 rounded-lg"
            >
              Log In
            </Link> */}
            <Link
              href="/register"
              onClick={closeMobileMenu}
              className="gradient px-5 py-2 text-center text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-background/10 backdrop-blur-[2px] z-30"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default NavBar;