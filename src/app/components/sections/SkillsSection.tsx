"use client";

import { motion } from 'framer-motion';
import { skillsConfig } from '@/config';

interface SkillsSectionProps {
  isOdd?: boolean;
}

export default function SkillsSection({ isOdd = false }: SkillsSectionProps) {
  const frontendSkills = skillsConfig.frontendSkills;
  const backendSkills = skillsConfig.backendSkills;
  const otherSkills = skillsConfig.otherSkills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    }),
  };

  return (
    <section id="skills" className={`section ${isOdd ? 'section-alt' : ''}`}>
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
            Skills
          </span>
          <h2 className="heading-gradient">{skillsConfig.title}</h2>
          <p className="subheading mx-auto">
            {skillsConfig.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <motion.div
            className="modern-card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Development</h3>
            </div>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {frontendSkills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      custom={skill.percentage}
                      variants={barVariants}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="modern-card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend Development</h3>
            </div>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {backendSkills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                      custom={skill.percentage}
                      variants={barVariants}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Other Skills */}
        <motion.div 
          className="mt-8 modern-card p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Technologies</h3>
          </div>
          <motion.div 
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-default hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.1), rgba(139, 92, 246, 0.1))',
                  border: '1px solid rgba(244, 114, 182, 0.2)',
                  color: 'rgb(244, 114, 182)',
                }}
                variants={itemVariants}
                whileHover={{ 
                  boxShadow: '0 10px 30px rgba(244, 114, 182, 0.2)',
                  borderColor: 'rgba(244, 114, 182, 0.5)'
                }}
                custom={index}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
