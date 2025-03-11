
import React from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay = 0
}) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2
  });
  
  const animationStyle = {
    transitionDelay: `${delay}s`
  };

  return (
    <div
      ref={elementRef}
      style={isVisible ? animationStyle : {}}
      className={cn(
        'border rounded-2xl p-6 shadow-sm transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
