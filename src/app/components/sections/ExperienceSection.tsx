"use client";

import { experienceConfig } from '@/config';

interface ExperienceSectionProps {
  isOdd?: boolean;
}

export default function ExperienceSection({ isOdd = true }: ExperienceSectionProps) {
  const experiences = experienceConfig.experiences;

  return (
    <section id="experience" className={`section ${isOdd ? 'bg-gray-50 dark:bg-slate-800/20' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading">{experienceConfig.title}</h2>
          <p className="subheading mx-auto">
            {experienceConfig.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.position}</h3>
                        <p className="text-lg font-medium">{exp.company}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </div>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mt-1">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 left-0 md:left-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
