import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero/Introduction Section */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Yumba Chitakala</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
              Aspiring Backend & Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl">
              4th year Computer Science student on a journey to master backend development, 
              explore full-stack engineering, and grow into a well-rounded software developer. 
              Still learning, always building, and enjoying every step of the process.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <Link 
                to="/skills" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                View Skills
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 border-2 border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Learning Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Currently <span className="text-blue-500">Learning</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies and skills I'm currently developing
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Backend Development</h3>
              <p className="text-gray-400 mb-4">
                Learning server-side programming, APIs, and database management
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">SQL</span>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Frontend Development</h3>
              <p className="text-gray-400 mb-4">
                Building responsive and interactive user interfaces
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">Tailwind</span>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all">
              <div className="text-blue-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Database Systems</h3>
              <p className="text-gray-400 mb-4">
                Understanding data storage, queries, and optimization
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">MongoDB</span>
                <span className="px-3 py-1 bg-gray-900 text-blue-400 text-sm rounded-full">MySQL</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/about"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Learn More About Me →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;