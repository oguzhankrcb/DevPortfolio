"use client";

import { skillsConfig } from '@/config';

interface SkillsSectionProps {
  isOdd?: boolean;
}

export default function SkillsSection({ isOdd = false }: SkillsSectionProps) {
  const frontendSkills = skillsConfig.frontendSkills;
  const backendSkills = skillsConfig.backendSkills;
  const otherSkills = skillsConfig.otherSkills;

  return (
    <section id="skills" className={`section ${isOdd ? 'bg-gray-50 dark:bg-slate-800/20' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading">{skillsConfig.title}</h2>
          <p className="subheading mx-auto">
            {skillsConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-blue-500">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-indigo-600">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-purple-500">Other Skills</h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-slate-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
