'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { footerConfig, siteConfig } from '@/config';
import { FooterLink } from '@/config/footerConfig';



export default function Footer() {
  const year = new Date().getFullYear();
  const copyrightText = footerConfig.copyright.text.replace('2025', year.toString());

  const copyrightYearText =
    footerConfig.copyright.startYear < year
      ? copyrightText.replace(year.toString(), `${footerConfig.copyright.startYear}-${year}`)
      : copyrightText;

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">
                Karacabay<span className="text-white">.com</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {siteConfig.social.github && (
                <a 
                  href={siteConfig.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub" 
                  className="social-icon"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a 
                  href={siteConfig.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  className="social-icon"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.twitter && (
                <a 
                  href={siteConfig.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter" 
                  className="social-icon"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.medium && (
                <a 
                  href={siteConfig.social.medium} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Medium" 
                  className="social-icon"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-cyan-500/50 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerConfig.links?.length > 0 && footerConfig.links.map((link: FooterLink, index: number) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-cyan-500/50 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      href={link.url}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-cyan-500/50 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-cyan-500/50 group-hover:text-blue-400 transition-colors mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              {copyrightYearText}
            </p>

            {footerConfig.credits.show && (
              <p className="text-slate-500 text-sm">
                {footerConfig.credits.text}
              </p>
            )}

            {footerConfig.backToTop.show && (
              <motion.a
                href="#home"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                <span>{footerConfig.backToTop.text}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
