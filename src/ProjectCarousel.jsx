import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden">
      {/* Project Display */}
      <div className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Project Image */}
          <div className="order-2 md:order-1">
            <img 
              src={currentProject.image} 
              alt={currentProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Project Info */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentProject.title}
            </h3>
            <p className="text-gray-300 mb-6">
              {currentProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {currentProject.tech.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-700 text-blue-400 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {currentProject.github && (
                <a 
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="px-6 py-2 border-2 border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-colors"
                >
                  View Code
                </a>
              )}
              {currentProject.demo && (
                <a 
                  href={currentProject.demo}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 text-white p-3 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-75 hover:bg-opacity-100 text-white p-3 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 pb-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;