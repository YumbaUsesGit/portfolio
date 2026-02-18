import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          About <span className="text-blue-500">Me</span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Bio Section */}
          <div className="bg-gray-800 p-8 rounded-lg mb-8">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a 4th year Computer Science student with a passion for backend development 
              and Program thinking. My journey in tech started with curiosity about how 
              things work under the hood, and has evolved into a focused pursuit of building 
              scalable, efficient systems.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Currently, I'm upgrading my efficieny with technologies including databases, APIs, and 
              server-side programming. My goal is to become a well-rounded full-stack developer 
              and IT expert, capable of architecting complete solutions from database design 
              to user interfaces.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or diving deep into system design patterns. I believe in 
              writing clean, maintainable code and building solutions that make a real impact.
            </p>
          </div>

          {/* Education & Focus Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-blue-400">Education</h3>
              </div>
              <p className="text-gray-300 mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-400">4th Year Student</p>
              <p className="text-gray-400 text-sm mt-2">Expected Graduation: 2027</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-semibold text-blue-400">Focus Areas</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Backend Development
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Database Systems
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  System Architecture
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  API Design
                </li>
                                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Mindset Design
                </li>
              </ul>
            </div>
          </div>

          {/* What I'm Learning */}
          <div className="bg-gray-800 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">What I'm Currently Learning</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Python</h4>
                <p className="text-gray-400 text-sm">Building scalable distributed systems</p>
              </div>
               <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">C#</h4>
                <p className="text-gray-400 text-sm">To use to Build Windows Apps and Services</p>
              </div>
              
              
            </div>
          </div>

          {/* Values/Principles */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">My Development Philosophy</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-white mb-1">Clean Code</h4>
                  <p className="text-gray-400">Writing maintainable, readable code that others can understand and build upon.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-white mb-1">Scalability First</h4>
                  <p className="text-gray-400">Building systems that can grow and adapt to changing requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-white mb-1">Continuous Learning</h4>
                  <p className="text-gray-400">Staying updated with industry trends and always improving my skills.</p>
                </div>
            
              </div>
                            <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-white mb-1">Think Like A Programmer Mindset</h4>
                  <p className="text-gray-400">Having a mind that runs off Curiosity, Structure and Problem Solving.</p>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;