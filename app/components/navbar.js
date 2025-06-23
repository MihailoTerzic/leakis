'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolledPastTop, setIsScrolledPastTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrolledPastTop = currentY > window.innerHeight;

      // Show/hide navbar on scroll up/down
      setShowNavbar(currentY < lastScrollY || currentY < 10);

      setIsScrolledPastTop(scrolledPastTop);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Detect mobile viewport width for styling decisions
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Mobile hamburger color
  let hamburgerColor = 'white';
  // Desktop text color
  let textColor = 'black';
  // Navbar background classes
  let navbarBgClasses = 'backdrop-blur-md bg-white/30';

  if (isMobile) {
    // On mobile, first 100vh: transparent, white icon; else blurred white bg, black icon
    if (!isScrolledPastTop) {
      hamburgerColor = 'white';
      navbarBgClasses = 'bg-transparent backdrop-filter-none';
      textColor = 'white';
    }
    else {hamburgerColor = 'black';}
  } else {
    // Desktop: first 100vh transparent with white text; after that blurred white bg, black text
    if (!isScrolledPastTop) {
      navbarBgClasses = 'bg-transparent backdrop-filter-none';
      textColor = 'white';
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500
          ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
          ${navbarBgClasses}
        `}
        style={{ WebkitBackdropFilter: navbarBgClasses.includes('backdrop-blur') ? 'blur(12px)' : 'none' }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-10 text-sm font-light justify-end w-full transition-colors duration-300`}
            style={{ color: textColor }}
          >
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="relative w-6 h-5 flex flex-col justify-between items-center md:hidden z-50 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className={`w-full h-[2px] transition-transform duration-300 ease-in-out`}
                style={{
                  backgroundColor: hamburgerColor,
                  transform: isMenuOpen
                    ? i === 0
                      ? 'rotate(45deg) translateY(9px)'
                      : i === 1
                      ? 'scale(0)'
                      : 'rotate(-45deg) translateY(-9px)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-300 z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-light md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-black text-3xl font-bold"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          ×
        </button>
        <Link href="#" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="#" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link href="#" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link href="#" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
}
