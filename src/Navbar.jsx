import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-500 transition-colors">
            A <span className="text-green-700">Growth Hub</span> Project
          </Link>
          
          {/* Nav Links */}
          <div className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                location.pathname === '/about' 
                  ? 'text-blue-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className={`transition-colors ${
                location.pathname === '/skills' 
                  ? 'text-blue-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors ${
                location.pathname === '/projects' 
                  ? 'text-blue-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-blue-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;