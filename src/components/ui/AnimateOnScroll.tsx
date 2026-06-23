import { type ElementType, type ReactNode, useEffect, useRef } from 'react'

type AnimationType =
  | 'animate-on-scroll'
  | 'animate-fade-in'
  | 'animate-fade-up'
  | 'animate-slide-left'
  | 'animate-slide-right'
  | 'animate-zoom-in'

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  delay?: 100 | 200 | 300 | number
  className?: string
  as?: ElementType
}

export function AnimateOnScroll({
  children,
  animation = 'animate-on-scroll',
  delay,
  className = '',
  as: Tag = 'div',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay && [100, 200, 300].includes(delay) ? `animate-delay-${delay}` : ''
  const style = delay && ![100, 200, 300].includes(delay) ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <Tag ref={ref} className={`${animation} ${delayClass} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
