import Link from 'next/link';
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
      return "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
    default:
      return "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
  }
}

function getBgColorClass(color: string): string {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 dark:bg-blue-900/30';
    case 'green':
      return 'bg-green-100 dark:bg-green-900/30';
    case 'purple':
      return 'bg-purple-100 dark:bg-purple-900/30';
    case 'yellow':
      return 'bg-yellow-100 dark:bg-yellow-900/30';
    case 'red':
      return 'bg-red-100 dark:bg-red-900/30';
    case 'indigo':
      return 'bg-indigo-100 dark:bg-indigo-900/30';
    default:
      return 'bg-gray-100 dark:bg-gray-800/30';
  }
}

function getTextColorClass(color: string): string {
  switch (color) {
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    case 'purple':
      return 'text-purple-500';
    case 'yellow':
      return 'text-yellow-500';
    case 'red':
      return 'text-red-500';
    case 'indigo':
      return 'text-indigo-500';
    default:
      return 'text-gray-500';
  }
}

interface AboutSectionProps {
  isOdd?: boolean;
}

export default function AboutSection({ isOdd = true }: AboutSectionProps) {
  return (
    <section id="about" className={`section ${isOdd ? 'bg-gray-50 dark:bg-slate-800/20' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading">{aboutConfig.title}</h2>
          <p className="subheading mx-auto">
            {aboutConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {aboutConfig.mainContent.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
            <div className="mt-8">
              <Link href={aboutConfig.ctaLink} className="btn btn-primary">
                {aboutConfig.ctaText}
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg h-full">
            <h3 className="text-2xl font-bold mb-6 text-blue-500">Achievements & Qualifications</h3>
            
            <div className="space-y-6">
              {aboutConfig.achievements.map((achievement, index) => {
                const iconPath = getIconPath(achievement.icon);
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${getBgColorClass(achievement.color)} p-3 rounded-lg`}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 ${getTextColorClass(achievement.color)}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{achievement.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
