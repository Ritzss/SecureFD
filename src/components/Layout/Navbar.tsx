import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-neon-darker border-b border-neon-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="neon-text font-bold text-xl">
              FD Manager
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'bg-neon-primary bg-opacity-10 text-neon-primary shadow-neon'
                  : 'text-gray-300 hover:text-neon-primary'
              } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`${
                location.pathname === '/dashboard'
                  ? 'bg-neon-primary bg-opacity-10 text-neon-primary shadow-neon'
                  : 'text-gray-300 hover:text-neon-primary'
              } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};