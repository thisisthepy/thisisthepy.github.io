
import React from 'react';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal, Book, Users, Github } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/lib/animations';

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
    <AnimatedCard className="flex items-start gap-6 p-8" delay={delay}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pythonic-light text-pythonic-blue flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <div>
        <div className="mb-2 p-2 rounded-md bg-pythonic-light/50 inline-block text-pythonic-blue">
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
  
  return (
    <section id="get-started" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-pythonic-light/30 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Ready to Get Started?"
          subtitle="Installation"
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
              title="Install the SDK"
              description="Add PyMobile to your project with a simple pip install command and set up the Kotlin or Swift bridge."
              icon={<Terminal className="w-5 h-5" />}
              delay={0.1}
            />
            
            <StepCard
              number={2}
              title="Write Python Code"
              description="Use the PyMobile API to interact with device features and implement your application logic in Python."
              icon={<Book className="w-5 h-5" />}
              delay={0.2}
            />
            
            <StepCard
              number={3}
              title="Build and Deploy"
              description="Package your application for Android and iOS, and deploy to app stores or enterprise distribution channels."
              icon={<Users className="w-5 h-5" />}
              delay={0.3}
            />
          </div>
          
          <div className="mt-12 text-center">
            <div className="glassmorphism inline-block px-6 py-4 rounded-xl mb-8">
              <code className="font-mono text-sm">pip install pymobile</code>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button 
                className="bg-pythonic-blue hover:bg-pythonic-blue/90 text-white py-6 px-8 text-lg button-hover-effect"
              >
                Download SDK
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 py-6 px-8 text-lg button-hover-effect"
              >
                <Github className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
