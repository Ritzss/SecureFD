import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neon-darker border-t border-neon-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 neon-text">FD Manager</h3>
            <p className="text-gray-300">
              Secure and easy way to manage your fixed deposits
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-neon-primary transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-neon-primary transition-colors duration-300">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-accent">Contact</h3>
            <p className="text-gray-300">
              Email: support@fdmanager.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neon-primary/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FD Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};