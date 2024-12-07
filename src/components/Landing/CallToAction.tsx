import React from 'react';
import { Link } from 'react-router-dom';

export const CallToAction: React.FC = () => {
  return (
    <div className="bg-neon-darker border-t border-neon-primary/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold neon-text sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Start managing your fixed deposits today.
          </p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="neon-button"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};