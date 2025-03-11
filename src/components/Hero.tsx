
import React, { useEffect, useState } from 'react';
import { useTypewriter } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import AnimatedBubble from './AnimatedBubble';
import { ArrowRight, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { displayText, isComplete } = useTypewriter('# Python for Mobile', 100);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20">
      {/* Background decorations */}
      <AnimatedBubble 
        size="lg" 
        color="bg-blue-100" 
        className="top-20 right-20 opacity-60 hidden lg:block" 
      />
      <AnimatedBubble 
        size="md" 
        color="bg-pythonic-light" 
        className="bottom-40 left-20 opacity-40" 
        delay={1}
      />
      <AnimatedBubble 
        size="sm" 
        color="bg-blue-200" 
        className="top-40 left-1/3 opacity-50" 
        delay={2} 
      />
      
      <div className="container mx-auto px-6 pt-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className={`max-w-2xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-pythonic-blue uppercase bg-pythonic-light rounded-full">
            Introducing a Revolutionary Bridge
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            <span className="text-gradient">Python</span> Meets <br />Mobile Development
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Run Python code seamlessly on iOS and Android with our Kotlin Multiplatform bridge. 
            Build mobile apps using the language you love, interoperate with native APIs, 
            and deploy on 5 different platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-pythonic-blue hover:bg-pythonic-blue/90 text-white py-6 px-8 text-lg button-hover-effect"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 py-6 px-8 text-lg button-hover-effect"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
        
        <div className={`flex-1 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-xs text-gray-400">terminal</div>
            </div>
            <div className="p-5 font-mono text-sm text-gray-300">
              <div className="text-green-400 mb-2">$ python -m pymobile.install</div>
              <div className="mb-2 text-gray-400">
                <span className="text-pythonic-blue">PyMobile</span> v1.0.0 - Initializing...
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
