import { type ReactNode } from 'react'

type AnimatedRevealProps = {
  show: boolean
  children: ReactNode
  className?: string
  variant?: 'fade' | 'fade-up' | 'fade-down' | 'scale'
}

const variantClass = {
  fade: 'motion-fade',
  'fade-up': 'motion-fade-up',
  'fade-down': 'motion-fade-down',
  scale: 'motion-scale',
} as const

export function AnimatedReveal({
  show,
  children,
  className = '',
  variant = 'fade-up',
}: AnimatedRevealProps) {
  return (
    <div
      className={`motion-reveal ${variantClass[variant]} ${show ? 'motion-reveal-visible' : ''} ${className}`}
      aria-hidden={!show}
    >
      {children}
    </div>
  )
}
