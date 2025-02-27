
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  alignment = 'center',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('mb-12 max-w-3xl', alignmentClasses[alignment], className)}>
      {subtitle && (
        <span className="inline-block mb-2 text-sm font-medium tracking-wider uppercase text-primary/70">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
