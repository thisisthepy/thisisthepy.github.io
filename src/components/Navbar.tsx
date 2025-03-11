
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScrollProgress } from '@/lib/animations';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();
  
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
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Get Started', href: '#get-started' }
  ];
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="relative z-10">
        <div 
          className="h-1 bg-pythonic-blue transition-all duration-300 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-pythonic-blue flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-semibold text-lg">PyMobile</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-pythonic-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button 
            className="bg-pythonic-blue hover:bg-pythonic-blue/90 text-white button-hover-effect"
          >
            Download SDK
          </Button>
        </div>
        
        <button 
          className="md:hidden focus:outline-none" 
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
              className="text-lg font-medium text-gray-800 hover:text-pythonic-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-pythonic-blue hover:bg-pythonic-blue/90 text-white w-full mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Download SDK
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
