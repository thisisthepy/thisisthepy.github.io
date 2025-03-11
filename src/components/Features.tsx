
import React from 'react';
import SectionHeading from './SectionHeading';
import AnimatedCard from './AnimatedCard';
import { useIntersectionObserver } from '@/lib/animations';
import { Smartphone, Globe, Zap, Code, Layers, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  gradientClass: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0, gradientClass }) => {
  return (
    <AnimatedCard className="h-full group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-pythonic-vividPurple/20 overflow-hidden" delay={delay}>
      <div className={`absolute top-0 left-0 right-0 h-1 ${gradientClass}`}></div>
      <div className="mb-6 p-3 rounded-lg inline-block text-white group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-pythonic-blue to-pythonic-vividPurple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedCard>
  );
};

const Features: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();
  
  const gradients = [
    "bg-gradient-to-r from-pythonic-blue to-pythonic-oceanBlue",
    "bg-gradient-to-r from-pythonic-vividPurple to-pythonic-magenta",
    "bg-gradient-to-r from-pythonic-yellow to-pythonic-orange",
    "bg-gradient-to-r from-pythonic-magenta to-pythonic-blue",
    "bg-gradient-to-r from-pythonic-oceanBlue to-pythonic-vividPurple",
    "bg-gradient-to-r from-pythonic-orange to-pythonic-yellow"
  ];
  
  const features = [
    {
      title: t('cross-platform'),
      description: t('cross-platform-desc'),
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: t('native-api'),
      description: t('native-api-desc'),
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: t('python-interpreter'),
      description: t('python-interpreter-desc'),
      icon: <Code className="w-6 h-6" />
    },
    {
      title: t('interoperability'),
      description: t('interoperability-desc'),
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: t('ai-ml'),
      description: t('ai-ml-desc'),
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: t('rapid-dev'),
      description: t('rapid-dev-desc'),
      icon: <Zap className="w-6 h-6" />
    }
  ];
  
  return (
    <section id="features" className="section-padding relative">
      <div 
        ref={elementRef}
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-pythonic-softPurple/30 opacity-0 transition-opacity duration-1000",
          isVisible && "opacity-100"
        )}
      />
      
      <div className="container mx-auto">
        <SectionHeading 
          title={t('features-title')}
          subtitle={t('features-subtitle')}
          titleClass="bg-gradient-to-r from-pythonic-blue via-pythonic-vividPurple to-pythonic-magenta bg-clip-text text-transparent"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
              gradientClass={gradients[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
