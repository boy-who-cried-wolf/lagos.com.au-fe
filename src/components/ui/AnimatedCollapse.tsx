import { type ReactNode } from 'react'

type AnimatedCollapseProps = {
  open: boolean
  children: ReactNode
  className?: string
  innerClassName?: string
  duration?: 'fast' | 'normal' | 'slow'
}

const durationClass = {
  fast: 'duration-200',
  normal: 'duration-300',
  slow: 'duration-500',
} as const

export function AnimatedCollapse({
  open,
  children,
  className = '',
  innerClassName = '',
  duration = 'normal',
}: AnimatedCollapseProps) {
  return (
    <div
      className={`grid transition-[grid-template-rows,opacity] ease-out ${durationClass[duration]} ${
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      } ${className}`}
      aria-hidden={!open}
    >
      <div className={`overflow-hidden ${innerClassName}`}>{children}</div>
    </div>
  )
}
