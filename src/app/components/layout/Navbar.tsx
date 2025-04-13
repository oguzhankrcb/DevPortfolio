'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import siteConfig from '@/config/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            DevPortfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.sections.hero && (
              <Link href="#home" className="font-medium hover:text-blue-500 transition-colors">
                Home
              </Link>
            )}
            {siteConfig.sections.about && (
              <Link href="#about" className="font-medium hover:text-blue-500 transition-colors">
                About
              </Link>
            )}
            {siteConfig.sections.skills && (
              <Link href="#skills" className="font-medium hover:text-blue-500 transition-colors">
                Skills
              </Link>
            )}
            {siteConfig.sections.projects && (
              <Link href="#projects" className="font-medium hover:text-blue-500 transition-colors">
                Projects
              </Link>
            )}
            {siteConfig.sections.experience && (
              <Link href="#experience" className="font-medium hover:text-blue-500 transition-colors">
                Experience
              </Link>
            )}
            {siteConfig.sections.contact && (
              <Link href="#contact" className="font-medium hover:text-blue-500 transition-colors">
                Contact
              </Link>
            )}
            {siteConfig.resumeUrl && (
              <Link href={siteConfig.resumeUrl} className="btn btn-primary">
                Resume
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white dark:bg-slate-900 z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 p-8">
          {siteConfig.sections.hero && (
            <Link 
              href="#home" 
              className="text-xl font-medium hover:text-blue-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          )}
          {siteConfig.sections.about && (
            <Link 
              href="#about" 
              className="text-xl font-medium hover:text-blue-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          )}
          {siteConfig.sections.skills && (
            <Link 
              href="#skills" 
              className="text-xl font-medium hover:text-blue-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Skills
            </Link>
          )}
          {siteConfig.sections.projects && (
            <Link 
              href="#projects" 
              className="text-xl font-medium hover:text-blue-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
          )}
          {siteConfig.sections.experience && (
            <Link 
              href="#experience" 
              className="text-xl font-medium hover:text-blue-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Experience
            </Link>
          )}
          {siteConfig.sections.contact && (
            <Link 
              href="#contact" 
              className="text-xl font-medium hover:text-blue-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          )}
          {siteConfig.resumeUrl && (
            <Link 
              href={siteConfig.resumeUrl} 
              className="btn btn-primary w-full text-center"
              onClick={toggleMobileMenu}
            >
              Resume
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
