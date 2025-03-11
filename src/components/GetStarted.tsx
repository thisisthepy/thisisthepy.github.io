
import React from 'react';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal, Book, Users, Github } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/lib/animations';
import { useLanguage } from '@/contexts/LanguageContext';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon,
  delay = 0
}) => {
  return (
    <AnimatedCard className="flex items-start gap-6 p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-pythonic-vividPurple/20" delay={delay}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pythonic-blue to-pythonic-vividPurple text-white flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <div>
        <div className="mb-2 p-2 rounded-md bg-pythonic-softPurple/50 inline-block text-pythonic-vividPurple">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedCard>
  );
};

const GetStarted: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();
  
  return (
    <section id="get-started" className="section-padding relative overflow-hidden bg-gradient-to-br from-pythonic-softBlue/50 to-white">
      <div className="absolute inset-0 bg-gradient-to-t from-pythonic-softPurple/30 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title={t('ready')}
          subtitle={t('installation')}
          titleClass="bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple bg-clip-text text-transparent"
        />
        
        <div
          ref={elementRef}
          className={cn(
            "max-w-4xl mx-auto transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="flex flex-col space-y-6">
            <StepCard
              number={1}
              title={t('install-sdk')}
              description={t('install-sdk-desc')}
              icon={<Terminal className="w-5 h-5" />}
              delay={0.1}
            />
            
            <StepCard
              number={2}
              title={t('write-python')}
              description={t('write-python-desc')}
              icon={<Book className="w-5 h-5" />}
              delay={0.2}
            />
            
            <StepCard
              number={3}
              title={t('build-deploy')}
              description={t('build-deploy-desc')}
              icon={<Users className="w-5 h-5" />}
              delay={0.3}
            />
          </div>
          
          <div className="mt-12 text-center">
            <div className="glassmorphism inline-block px-6 py-4 rounded-xl mb-8 bg-gradient-to-br from-white/80 to-pythonic-softPurple/40 backdrop-blur-md shadow-lg border border-white/50">
              <code className="font-mono text-sm">pip install pythonmultiplatform</code>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button 
                className="bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple hover:opacity-90 text-white py-6 px-8 text-lg button-hover-effect"
              >
                {t('download-sdk')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a 
                href="https://github.com/thisisthepy/python-multiplatform" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="border-gray-300 py-6 px-8 text-lg button-hover-effect w-full"
                >
                  <Github className="mr-2 h-5 w-5" />
                  {t('view-docs')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
