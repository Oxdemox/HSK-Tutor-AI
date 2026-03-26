import React from 'react';
import { motion } from 'motion/react';

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function ProgressRing({
  percentage,
  size = 120,
  strokeWidth = 8,
  showLabel = true,
  label,
  className = '',
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--surface-sunken)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-[var(--text-primary)]">
            {percentage}%
          </span>
          {label && (
            <span className="text-xs text-[var(--text-tertiary)] font-medium">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

interface ProgressBarProps {
  percentage: number;
  height?: number;
  showLabel?: boolean;
  animated?: boolean;
  className?: string;
}

export function ProgressBar({
  percentage,
  height = 8,
  showLabel = false,
  animated = true,
  className = '',
}: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-[var(--text-secondary)]">Progress</span>
          <span className="text-xs font-bold text-[var(--text-primary)]">{percentage}%</span>
        </div>
      )}
      <div
        className="w-full bg-[var(--surface-sunken)] rounded-full overflow-hidden"
        style={{ height }}
      >
        <motion.div
          className="h-full bg-[var(--accent-primary)] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={animated ? { duration: 0.6, ease: "easeOut" } : { duration: 0 }}
        />
      </div>
    </div>
  );
}

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function ProgressSteps({
  steps,
  currentStep,
  className = '',
}: ProgressStepsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`
              flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold
              transition-colors duration-300
              ${index < currentStep
                ? 'bg-[var(--accent-primary)] text-white'
                : index === currentStep
                  ? 'bg-[var(--accent-soft)] text-[var(--accent-primary)] border-2 border-[var(--accent-primary)]'
                  : 'bg-[var(--surface-sunken)] text-[var(--text-tertiary)]'
              }
            `}
          >
            {index < currentStep ? '✓' : index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`
                flex-1 h-1 rounded-full
                ${index < currentStep ? 'bg-[var(--accent-primary)]' : 'bg-[var(--surface-sunken)]'}
              `}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}