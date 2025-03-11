
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  className?: string;
  titleClass?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  className = "mb-16",
  titleClass = ""
}) => {
  return (
    <div className={cn("text-center", className)}>
      {subtitle && (
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-pythonic-blue uppercase bg-pythonic-light rounded-full">
          {subtitle}
        </div>
      )}
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", titleClass)}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
