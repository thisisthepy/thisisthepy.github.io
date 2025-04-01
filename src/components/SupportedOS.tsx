
import React from 'react';
import { Check, X, Monitor, Smartphone, Apple } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/lib/animations';

interface OSItemProps {
  name: string;
  icon: React.ReactNode;
  supported: boolean;
}

const OSItem: React.FC<OSItemProps> = ({ name, icon, supported }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pythonic-gradient1/50">
      <div className="w-16 h-16 mb-4 flex items-center justify-center text-pythonic-gradient1">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      <div className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full", 
        supported ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
      )}>
        {supported ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </div>
    </div>
  );
};

const SupportedOS: React.FC = () => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const operatingSystems = [
    { 
      name: t('android'), 
      icon: <Smartphone className="w-12 h-12" />, 
      supported: true 
    },
    { 
      name: t('ios'), 
      icon: <Apple className="w-12 h-12" />, 
      supported: true 
    },
    { 
      name: t('windows'), 
      icon: <Monitor className="w-12 h-12" />, 
      supported: true 
    },
    { 
      name: t('macos'), 
      icon: <Apple className="w-12 h-12" />, 
      supported: true 
    },
    { 
      name: t('linux'), 
      icon: <Monitor className="w-12 h-12" />, 
      supported: true 
    },
  ];
  
  return (
    <section className="section-padding bg-gradient-to-br from-pythonic-softPurple to-pythonic-softBlue">
      <div
        ref={elementRef}
        className={cn(
          "container mx-auto transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
      >
        <SectionHeading
          title={t('supported-os')}
          subtitle=""
          className="mb-12"
          titleClass="bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple bg-clip-text text-transparent"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {operatingSystems.map((os) => (
            <OSItem 
              key={os.name}
              name={os.name}
              icon={os.icon}
              supported={os.supported}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedOS;
