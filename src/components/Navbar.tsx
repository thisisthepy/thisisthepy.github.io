
import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScrollProgress } from '@/lib/animations';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinks = [
    { name: t('features'), href: '#features' },
    { name: t('how-it-works'), href: '#how-it-works' },
    { name: t('get-started'), href: '#get-started' }
  ];
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="relative z-10">
        <div 
          className="h-1 bg-gradient-to-r from-pythonic-blue via-pythonic-vividPurple to-pythonic-magenta transition-all duration-300 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pythonic-blue to-pythonic-vividPurple flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-semibold text-lg">PythonMultiplatform</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-pythonic-vividPurple transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          
          <a 
            href="https://github.com/thisisthepy/python-multiplatform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pythonic-blue transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          
          <Button 
            className="bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple hover:opacity-90 text-white button-hover-effect"
          >
            {t('download-sdk')}
          </Button>
        </div>
        
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSelector />
          
          <button 
            className="focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        'fixed inset-0 z-40 bg-white pt-20 px-6 transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col space-y-8 pt-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800 hover:text-pythonic-vividPurple"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="https://github.com/thisisthepy/python-multiplatform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-gray-800 hover:text-pythonic-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </a>
          
          <Button 
            className="bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple hover:opacity-90 text-white w-full mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('download-sdk')}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
