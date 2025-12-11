'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '@/config/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '#home', label: 'Home', visible: siteConfig.sections.hero },
    { href: '#about', label: 'About', visible: siteConfig.sections.about },
    { href: '#skills', label: 'Skills', visible: siteConfig.sections.skills },
    { href: '#projects', label: 'Projects', visible: siteConfig.sections.projects },
    { href: '#experience', label: 'Experience', visible: siteConfig.sections.experience },
    { href: '#contact', label: 'Contact', visible: siteConfig.sections.contact },
  ].filter(item => item.visible);

  return (
    <>
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card !rounded-none border-x-0 border-t-0' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-xl md:text-2xl font-bold gradient-text">
              Karacabay<span className="text-white group-hover:text-blue-400 transition-colors duration-300">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="nav-link px-4"
              >
                {item.label}
              </Link>
            ))}
            {siteConfig.resumeUrl && (
              <Link href={siteConfig.resumeUrl} className="ml-4 btn btn-primary py-2 px-5 text-sm">
                Resume
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center modern-card !p-0"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} 
              />
              <span 
                className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} 
              />
            </div>
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Navigation - Outside header to avoid backdrop-filter issues */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 top-[72px] bg-slate-950/95 backdrop-blur-xl z-[60]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center gap-2 p-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  className="text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors py-3 px-6"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {siteConfig.resumeUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4"
              >
                <Link 
                  href={siteConfig.resumeUrl} 
                  className="btn btn-primary w-full px-8"
                  onClick={toggleMobileMenu}
                >
                  Resume
                </Link>
              </motion.div>
            )}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}
