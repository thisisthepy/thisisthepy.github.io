
import React, { useEffect, useState } from 'react';
import { useTypewriter } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import AnimatedBubble from './AnimatedBubble';
import { ArrowRight, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();
  const { displayText, isComplete } = useTypewriter('# Python for Mobile', 100);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20 bg-gradient-to-br from-white via-pythonic-softBlue to-pythonic-softPurple">
      {/* Background decorations */}
      <AnimatedBubble 
        size="lg" 
        color="bg-pythonic-softPink/60" 
        className="top-20 right-20 opacity-60 hidden lg:block" 
      />
      <AnimatedBubble 
        size="md" 
        color="bg-pythonic-softOrange/50" 
        className="bottom-40 left-20 opacity-40" 
        delay={1}
      />
      <AnimatedBubble 
        size="sm" 
        color="bg-pythonic-softYellow/60" 
        className="top-40 left-1/3 opacity-50" 
        delay={2} 
      />
      
      <div className="container mx-auto px-6 pt-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className={`max-w-2xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple rounded-full">
            {t('introducing')}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-pythonic-blue via-pythonic-vividPurple to-pythonic-magenta bg-clip-text text-transparent">Python</span> {t('python-meets')}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            {t('hero-description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple hover:opacity-90 text-white py-6 px-8 text-lg button-hover-effect"
            >
              {t('get-started-button')}
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
                {t('view-on-github')}
              </Button>
            </a>
          </div>
        </div>
        
        <div className={`flex-1 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-xs text-gray-400">terminal</div>
            </div>
            <div className="p-5 font-mono text-sm text-gray-300">
              <div className="text-green-400 mb-2">$ python -m pythonmultiplatform.install</div>
              <div className="mb-2 text-gray-400">
                <span className="text-pythonic-vividPurple">PythonMultiplatform</span> v1.0.0 - Initializing...
              </div>
              <div className="mb-2 text-gray-400">
                ✓ Python interpreter embedded
              </div>
              <div className="mb-2 text-gray-400">
                ✓ Kotlin bridge configured
              </div>
              <div className="mb-2 text-gray-400">
                ✓ Platform APIs connected
              </div>
              <div className="text-white font-medium mt-4 flex items-center">
                <span className="animate-pulse mr-1">❯</span> {displayText}
                <span className={`inline-block w-2 h-5 bg-white ml-1 ${isComplete ? 'animate-pulse-subtle' : 'animate-pulse'}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
