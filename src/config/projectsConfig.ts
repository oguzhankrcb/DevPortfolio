export const projectsConfig = {
  title: "My Projects",
  subtitle: "Here's a selection of my recent work. Each project reflects my passion for creating elegant and functional web applications.",
  
  categories: [
    { id: 'all', name: 'All' },
    { id: 'laravel', name: 'Laravel' },
    { id: 'symfony', name: 'Symfony' },
    { id: 'tool', name: 'Tools & Packages' },
    { id: 'fullstack', name: 'Full Stack' }
  ],
  
  projects: [
    {
      id: 1,
      title: 'DoktordanRandevu.Com',
      description: 'A streamlined appointment management platform that connects patients with doctors, built with Laravel, Vue.js, Inertia, and Redis for fast and reliable performance.',
      image: '/images/projects/doktordanrandevu.jpg',
      demoUrl: 'https://doktordanrandevu.com',
      githubUrl: '#',
      category: 'fullstack',
      technologies: [
        'Laravel',
        'Vue.js',
        'Inertia.js',
        'Redis',
        'MySQL',
        'Tailwind CSS',
        'REST API'
      ]
    },
    {
      id: 2,
      title: 'DevPortfolio',
      description: 'A modern, fully customizable portfolio website built with Next.js and Tailwind CSS, featuring dynamic configuration, dark/light mode, and a modular design system.',
      image: '/images/projects/devportfolio.jpg', 
      demoUrl: 'https://karacabay.com',
      githubUrl: 'https://github.com/oguzhankrcb/devportfolio',
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Responsive Design']
    },
    {
      id: 3,
      title: 'OTI - One Time Information',
      description: 'A modern web application designed for secure, one-time information sharing with client-side encryption, self-destruct capabilities, and password protection.',
      image: '/images/projects/oti.jpg', 
      demoUrl: 'https://oti.karacabay.com',
      githubUrl: 'https://github.com/oguzhankrcb/oti',
      category: 'fullstack',
      technologies: ['AdonisJS', 'TypeScript', 'Node.js', 'Redis', 'Client-Side Encryption', 'Vite']
    },
    {
      id: 4,
      title: 'Symfony Microservice with gRPC',
      description: 'A Symfony-based microservice architecture leveraging gRPC for high-performance communication between services. Built with Docker for local development.',
      image: '/images/projects/symfony-grpc.jpg', 
      demoUrl: '#',
      githubUrl: 'https://github.com/oguzhankrcb/symfony-micro-service-with-grpc',
      category: 'symfony',
      technologies: ['Symfony', 'gRPC', 'Docker', 'Microservices', 'RoadRunner']
    },
    {
      id: 5,
      title: 'DataMigrator Laravel Package',
      description: 'A PHP/Laravel package that helps you migrate data from one model to another with ease and flexibility.',
      image: '/images/projects/data-migrator.jpg', 
      demoUrl: '#',
      githubUrl: 'https://github.com/oguzhankrcb/DataMigrator',
      category: 'tool',
      technologies: ['PHP', 'Laravel', 'Database Migrations']
    },
    {
      id: 5,
      title: 'Auto Casting Json Resource',
      description: 'A package with the ability of automatically casting your JsonResource data using the casting functions you have defined.',
      image: '/images/projects/json-resource.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/oguzhankrcb/auto-casting-json-resource',
      category: 'tool',
      technologies: ['PHP', 'Laravel', 'JSON Resources', 'API']
    },
  ]
};
