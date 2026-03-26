import React from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

type OwnButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = OwnButtonProps &
  Omit<React.ComponentProps<typeof motion.button>, keyof OwnButtonProps>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[rgba(0,0,0,0.06)] shadow-[var(--shadow-sm)] hover:bg-[var(--surface-sunken)]',
  secondary: 'bg-[var(--surface-sunken)] text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]',
  ghost: 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-sunken)] hover:text-[var(--text-primary)]',
  accent: 'bg-[var(--accent-primary)] text-[var(--text-inverse)] shadow-[var(--shadow-accent)] hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-accent-lg)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5 rounded-[var(--radius-md)]',
  md: 'px-4 py-2 text-sm gap-2 rounded-[var(--radius-lg)]',
  lg: 'px-6 py-3 text-base gap-2.5 rounded-[var(--radius-xl)]',
  xl: 'px-8 py-4 text-lg gap-3 rounded-[var(--radius-2xl)]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      className={`
        inline-flex items-center justify-center
        font-semibold
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loader2 size={size === 'sm' ? 14 : size === 'lg' || size === 'xl' ? 20 : 16} className="animate-spin" />
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </motion.button>
  );
}