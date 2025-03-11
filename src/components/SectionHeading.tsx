
import React from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={elementRef}
      className={cn(
        'mb-12',
        centered && 'text-center',
        isVisible ? 'animate-fade-in-up' : 'opacity-0',
        className
      )}
    >
      <div className="inline-block">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-pythonic-blue uppercase bg-pythonic-light rounded-full">
          {subtitle || 'Feature'}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
