import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const ANIMATION_CLASSES = [
  'animate-on-scroll',
  'animate-fade-in',
  'animate-fade-up',
  'animate-slide-left',
  'animate-slide-right',
  'animate-zoom-in',
]

export function useScrollAnimations() {
  const location = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll(ANIMATION_CLASSES.map((c) => `.${c}`).join(','))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])
}

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true
          el.classList.add('in-view')
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
