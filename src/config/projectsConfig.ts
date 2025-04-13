export const projectsConfig = {
  title: "My Projects",
  subtitle: "Here's a selection of my recent work. Each project reflects my passion for creating elegant and functional web applications.",
  
  categories: [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' }
  ],
  
  projects: [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A feature-rich e-commerce platform with product management, shopping cart, and payment integration.',
      image: '/images/projects/project1.jpg', 
      demoUrl: 'https://demo-project1.com',
      githubUrl: 'https://github.com/username/project1',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality and team collaboration features.',
      image: '/images/projects/project2.jpg',
      demoUrl: 'https://demo-project2.com',
      githubUrl: 'https://github.com/username/project2',
      category: 'frontend',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current and forecasted weather data with beautiful visualizations.',
      image: '/images/projects/project3.jpg',
      demoUrl: 'https://demo-project3.com',
      githubUrl: 'https://github.com/username/project3',
      category: 'frontend',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3']
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social networking platform with real-time messaging, post sharing, and user authentication.',
      image: '/images/projects/project4.jpg',
      demoUrl: 'https://demo-project4.com',
      githubUrl: 'https://github.com/username/project4',
      category: 'fullstack',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'WebSockets']
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress with custom analytics.',
      image: '/images/projects/project5.jpg',
      demoUrl: 'https://demo-project5.com',
      githubUrl: 'https://github.com/username/project5',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Firebase', 'Expo']
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'A web application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.',
      image: '/images/projects/project6.jpg',
      demoUrl: 'https://demo-project6.com',
      githubUrl: 'https://github.com/username/project6',
      category: 'frontend',
      technologies: ['Vue.js', 'Vuex', 'Recipe API', 'SCSS']
    }
  ]
};
