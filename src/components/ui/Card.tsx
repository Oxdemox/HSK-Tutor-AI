import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'elevated' | 'accent';
}

const variantStyles = {
  default: 'bg-[var(--surface-elevated)] border border-[rgba(0,0,0,0.06)] shadow-[var(--shadow-sm)]',
  elevated: 'bg-[var(--surface-elevated)] shadow-[var(--shadow-lg)]',
  accent: 'bg-[var(--accent-soft)] border border-[var(--accent-glow)]',
};

export default function Card({
  children,
  className = '',
  hover = false,
  onClick,
  variant = 'default',
}: CardProps) {
  const Component = onClick ? motion.button : motion.div;
  
  return (
    <Component
      onClick={onClick}
      whileHover={hover ? { y: -4, boxShadow: 'var(--shadow-xl)' } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      className={`
        rounded-[var(--radius-2xl)]
        ${variantStyles[variant]}
        ${hover ? 'transition-all duration-[var(--transition-normal)] cursor-pointer' : ''}
        ${onClick ? 'text-left w-full' : ''}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}

// Card Subcomponents
export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-xl font-bold text-[var(--text-primary)] tracking-[var(--tracking-tight)] ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-[var(--text-secondary)] mt-1 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}