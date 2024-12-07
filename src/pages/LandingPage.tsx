
import { Hero } from '../components/Landing/Hero';
import { Features } from '../components/Landing/Features';
import { CallToAction } from '../components/Landing/CallToAction';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-neon-darker">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
};