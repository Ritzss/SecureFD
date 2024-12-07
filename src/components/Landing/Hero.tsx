import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-neon-darker border-b border-neon-primary/20">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block neon-text">Manage Your Fixed Deposits</span>
            <span className="block text-neon-secondary mt-2">Securely and Efficiently</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Keep track of all your fixed deposits in one place with our secure and easy-to-use platform.
          </p>
          <div className="mt-10">
            <Link
              to="/dashboard"
              className="neon-button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};