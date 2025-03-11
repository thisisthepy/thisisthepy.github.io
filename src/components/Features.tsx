
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedCard from './AnimatedCard';
import { useIntersectionObserver } from '@/lib/animations';
import { Smartphone, Globe, Zap, Code, Layers, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <AnimatedCard className="h-full group hover:border-pythonic-blue" delay={delay}>
      <div className="mb-4 p-3 rounded-lg bg-pythonic-light inline-block text-pythonic-blue group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedCard>
  );
};

const Features: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const features = [
    {
      title: "Cross-Platform Python",
      description: "Run your Python code on Android, iOS, Windows, macOS, and Linux with a single codebase.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Native API Access",
      description: "Access device capabilities and native APIs directly from Python through our Kotlin bridge.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Python Interpreter Embedded",
      description: "Full Python interpreter embedded with performance optimizations for mobile devices.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Seamless Interoperability",
      description: "Bidirectional communication between Python and Kotlin with type safety and error handling.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "AI & ML Ready",
      description: "Easily integrate AI models and ML libraries directly in your mobile applications.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Rapid Development",
      description: "Speed up your mobile development with Python's simplicity and the vast ecosystem of packages.",
      icon: <Zap className="w-6 h-6" />
    }
  ];
  
  return (
    <section id="features" className="section-padding relative">
      <div 
        ref={elementRef}
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-pythonic-light/30 opacity-0 transition-opacity duration-1000",
          isVisible && "opacity-100"
        )}
      />
      
      <div className="container mx-auto">
        <SectionHeading 
          title="Unlock Python's Power on Mobile"
          subtitle="Features"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
