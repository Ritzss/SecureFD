import React from 'react';
import { HeroIcon } from '../UI/HeroIcon';

interface FeatureCardProps {
  icon: HeroIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center p-6 neon-border bg-neon-darker/50 rounded-lg">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neon-primary/10 text-neon-primary mx-auto">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-lg font-medium text-neon-primary">{title}</h3>
      <p className="mt-2 text-base text-gray-300">
        {description}
      </p>
    </div>
  );
};