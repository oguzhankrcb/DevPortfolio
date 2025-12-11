'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { aboutConfig } from '@/config';

function getIconPath(iconName: string): string {
  switch (iconName) {
    case 'briefcase':
      return "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";
    case 'check-badge':
      return "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z";
    case 'academic-cap':
      return "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z";
    case 'light-bulb':
      return "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z";
    default:
      return "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  }
}

function getGradientClass(color: string): string {
  switch (color) {
    case 'blue':
      return 'from-cyan-500 to-blue-500';
    case 'green':
      return 'from-emerald-500 to-teal-500';
    case 'purple':
      return 'from-violet-500 to-purple-500';
    case 'yellow':
      return 'from-amber-500 to-yellow-500';
    case 'red':
      return 'from-rose-500 to-red-500';
    case 'indigo':
      return 'from-indigo-500 to-violet-500';
    default:
      return 'from-cyan-500 to-violet-500';
  }
}

interface AboutSectionProps {
  isOdd?: boolean;
}

export default function AboutSection({ isOdd = true }: AboutSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="about" className={`section ${isOdd ? 'section-alt' : ''}`}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-4">
            About Me
          </span>
          <h2 className="heading-gradient">{aboutConfig.title}</h2>
          <p className="subheading mx-auto">
            {aboutConfig.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="modern-card p-8 lg:p-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                Get to know me!
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {aboutConfig.mainContent.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/<strong>/g, '<strong class="text-white font-semibold">') }} />
                ))}
              </div>
              <div className="mt-8 mt-auto">
                <Link href={aboutConfig.ctaLink} className="btn btn-primary">
                  <span className="flex items-center gap-2">
                    {aboutConfig.ctaText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="modern-card p-8 lg:p-10 h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600" />
                <span className="gradient-text">Achievements & Qualifications</span>
              </h3>
              
              <div className="space-y-6">
                {aboutConfig.achievements.map((achievement, index) => {
                  const iconPath = getIconPath(achievement.icon);
                  const gradientClass = getGradientClass(achievement.color);
                  
                  return (
                    <motion.div 
                      key={index} 
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                      variants={itemVariants}
                    >
                      <div className={`relative p-3 rounded-xl bg-gradient-to-br ${gradientClass} flex-shrink-0`}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-6 w-6 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                        </svg>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientClass} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
