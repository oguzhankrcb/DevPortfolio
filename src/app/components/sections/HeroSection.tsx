"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroConfig, siteConfig } from '@/config';
import profileImage from '../../../../public/images/profile.png'

interface HeroSectionProps {
  isOdd?: boolean;
}

export default function HeroSection({ isOdd = false }: HeroSectionProps) {
  const [typedText, setTypedText] = useState('');
  const fullText = heroConfig.title;
  const typingSpeed = 100;

  useEffect(() => {
    let currentCharIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const startTyping = () => {
      currentCharIndex = 0;

      typingInterval = setInterval(() => {
        if (currentCharIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentCharIndex));
          currentCharIndex++;
        } else {
          clearInterval(typingInterval);

          pauseTimeout = setTimeout(() => {
            startTyping();
          }, 2000);
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
    };
  }, [fullText, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center pt-20 relative overflow-hidden ${isOdd ? 'section-alt' : ''}`}
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-900/30 text-blue-400 border border-blue-800">
                {heroConfig.greeting}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text">{heroConfig.name}</span>
            </motion.h1>

            {/* Title with typing effect */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-12 text-gray-200"
            >
              <span>{typedText}</span>
              <span className="inline-block w-0.5 h-8 bg-blue-500 ml-1 animate-pulse" />
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              {heroConfig.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href={heroConfig.ctaLink} className="btn btn-primary">
                <span className="flex items-center gap-2">
                  {heroConfig.ctaText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Talk
                </span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.medium && (
                <a
                  href={siteConfig.social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Medium"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                  </svg>
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          {profileImage && (
            <motion.div 
              className="order-1 lg:order-2 flex justify-center"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 blur-3xl opacity-30 animate-pulse-glow" />
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Animated border ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 animate-spin-slow opacity-75" style={{ padding: '3px' }}>
                    <div className="w-full h-full rounded-full bg-slate-950" />
                  </div>
                  
                  {/* Image */}
                  <div className="absolute inset-2 rounded-full overflow-hidden modern-card">
                    <Image
                      src={profileImage}
                      alt="Developer"
                      fill
                      sizes="(max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
                      priority
                      className="object-cover object-center"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div 
                  className="absolute -right-4 top-8 modern-card px-4 py-2 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">💻</span>
                  <span className="ml-2 text-sm font-medium text-blue-400">5+ Years</span>
                </motion.div>

                <motion.div 
                  className="absolute -left-4 bottom-20 modern-card px-4 py-2 rounded-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-2xl">🚀</span>
                  <span className="ml-2 text-sm font-medium text-indigo-400">20+ Projects</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
