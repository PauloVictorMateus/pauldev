import React from "react";
import FrangoDoChef from '../assets/projects/frango-do-chefe.png'
import DomRoxao from '../assets/projects/dom-roxao.png'
import PhoneShop from '../assets/projects/phoneshop.png'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Dom Roxão",
      description: "Projeto de Linktree personalizado para açaiteria Dom Roxão com menu interativo de pedidos",
      image: DomRoxao,
      technologies: ["React", "TypeScript"],
      github: "https://github.com/PauloVictorMateus/linktree-domroxao",
      demo: "https://linktree-domroxao.vercel.app/"
    },

    {
      title: "Frango do Chefe",
      description: "Criador de notas fiscais para clientes compradores de aves para consumo",
      image: FrangoDoChef,
      technologies: ["React", "TypeScript"],
      github: "https://github.com/PauloVictorMateus/frango-do-chef",
      demo: "https://frango-do-chef.vercel.app/"
    },

    {
      title: "Phone Shop",
      description: "Pequena loja de smartphones interativa",
      image: PhoneShop,
      technologies: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/PauloVictorMateus/phoneshoppauldev",
      demo: "https://phoneshop-paulovictormateus-projects.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4  mt-4">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
