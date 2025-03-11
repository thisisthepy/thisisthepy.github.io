
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBubbleProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedBubble: React.FC<AnimatedBubbleProps> = ({
  size = 'md',
  color = 'bg-blue-100',
  className,
  delay = 0,
  duration = 6
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const style = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  };

  return (
    <div
      style={style}
      className={cn(
        'rounded-full absolute opacity-70 animate-float blur-xl',
        sizeClasses[size],
        color,
        className
      )}
    />
  );
};

export default AnimatedBubble;
