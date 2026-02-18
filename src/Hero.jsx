import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
            Backend Developer | Future Full-Stack Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl">
            4th year Computer Science student specializing in backend development, 
            databases, and system architecture. Building robust solutions and working 
            towards becoming a full-stack software developer.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;