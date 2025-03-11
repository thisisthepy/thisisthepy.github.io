
import React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="w-9 h-9 rounded-full text-gray-700 hover:text-pythonic-blue hover:bg-pythonic-light/50"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">Toggle language</span>
    </Button>
  );
};

export default LanguageSelector;
