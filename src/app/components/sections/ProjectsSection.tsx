'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { projectsConfig } from '@/config';

function ImageWithFallback({ imageUrl, title }: { imageUrl: string, title: string }) {
  const [showImage, setShowImage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = imageUrl;
    
    img.onload = () => {
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setShowImage(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);
  
  if (!showImage) return null;
  
  return (
    <div className="relative h-56 w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-slate-700">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        onError={() => setShowImage(false)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

interface ProjectsSectionProps {
  isOdd?: boolean;
}

const projects = projectsConfig.projects;
const categories = projectsConfig.categories;


export default function ProjectsSection({ isOdd = false }: ProjectsSectionProps) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={`section ${isOdd ? 'bg-gray-50 dark:bg-slate-800/20' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading">{projectsConfig.title}</h2>
          <p className="subheading mx-auto">
            {projectsConfig.subtitle}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap md:flex-nowrap justify-center bg-white dark:bg-slate-800 p-1.5 rounded-lg shadow-md w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`md:flex-auto min-w-fit mx-1 my-1 px-3 sm:px-4 md:px-5 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === category.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2"
            >
              {project.image && (
                <ImageWithFallback
                  imageUrl={project.image} 
                  title={project.title} 
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary py-2 px-4 text-sm"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline py-2 px-4 text-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
