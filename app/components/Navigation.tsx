'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold">
            YH
          </a>
          
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="p-2"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  menu?.classList.add('hidden');
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
