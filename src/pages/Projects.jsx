import React, { useState } from 'react';
import { projects } from "../ProjectData.js";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Get unique technologies for filtering
  const allTechs = [...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <p className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto">
          A collection of projects I've built to solve real problems and learn new technologies.
          Each project represents a step in my journey as a developer.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          {allTechs.slice(0, 6).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === tech 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-900 text-gray-400 text-sm rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <button className="text-blue-400 hover:text-blue-300 font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-900 bg-opacity-75 text-white p-2 rounded-full hover:bg-opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gray-900 hover:bg-gray-700 rounded-lg font-semibold text-center transition-colors"
                    >
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-center transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;