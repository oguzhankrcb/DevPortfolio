"use client";

import { motion } from 'framer-motion';
import { experienceConfig } from '@/config';

interface ExperienceSectionProps {
  isOdd?: boolean;
}

export default function ExperienceSection({ isOdd = true }: ExperienceSectionProps) {
  const experiences = experienceConfig.experiences;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="experience" className={`section ${isOdd ? 'section-alt' : ''}`}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            Experience
          </span>
          <h2 className="heading-gradient">{experienceConfig.title}</h2>
          <p className="subheading mx-auto">
            {experienceConfig.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-pink-500 transform md:-translate-x-1/2" />

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="relative pl-12 md:pl-0"
                variants={index % 2 === 0 ? rightItemVariants : itemVariants}
              >
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                  <div className="modern-card p-6 md:p-8 group hover:-translate-y-1 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-600 dark:text-blue-400 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-1">{exp.company}</p>
                        <div className="flex items-center text-sm text-slate-500 mt-2">
                          <svg className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </div>
                      </div>
                      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        {exp.period}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                    
                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-gray-600 dark:text-gray-400 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 animate-pulse-glow" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 animate-ping opacity-30" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
