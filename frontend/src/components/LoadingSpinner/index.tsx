import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = '#667eea',
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`inline-block ${sizeClasses[size]} ${className}`}>
      <div
        className="animate-spin rounded-full border-2 border-solid border-current border-r-transparent"
        style={{ color }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
} 