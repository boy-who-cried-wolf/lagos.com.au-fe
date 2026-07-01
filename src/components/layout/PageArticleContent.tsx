import { useEffect, useRef } from 'react'

type PageArticleContentProps = {
  html: string
  variant?: 'default' | 'guide' | 'legal'
}

export function PageArticleContent({ html, variant = 'default' }: PageArticleContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const units = root.querySelectorAll<HTMLElement>('.page-intro, .page-section, .page-accreditations')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 1024px)').matches

    units.forEach((el, index) => {
      el.classList.add('animate-fade-up')
      el.style.setProperty('--aos-delay', `${(index % 6) * 80}ms`)
    })

    if (reducedMotion || !desktop) {
      units.forEach((el) => el.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    units.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [html])

  return (
    <div
      ref={ref}
      className={`page-article page-article--${variant}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
