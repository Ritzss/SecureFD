import React from 'react';
import { FeatureCard } from './FeatureCard';
import { ShieldCheckIcon, ChartBarIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Secure Storage',
    description: 'Your data is encrypted and stored securely on your device'
  },
  {
    icon: ChartBarIcon,
    title: 'Easy Management',
    description: 'Track all your FDs in one place with an intuitive interface'
  },
  {
    icon: LockClosedIcon,
    title: 'Privacy First',
    description: 'Your data never leaves your device, ensuring complete privacy'
  }
];

export const Features: React.FC = () => {
  return (
    <div className="py-16 bg-neon-darker" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold neon-text">
            Why Choose FD Manager?
          </h2>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};