import { Link } from 'react-router-dom'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

type RelatedLinksSectionProps = {
  links: { label: string; href: string }[]
  title?: string
}

export function RelatedLinksSection({ links, title = 'Explore Related Services' }: RelatedLinksSectionProps) {
  if (!links.length) return null

  return (
    <section className="section-related py-16 lg:py-20">
      <div className="container">
        <div className="loan-types-card overflow-hidden rounded-[2rem] bg-[#FAEBDC] px-6 py-12 lg:rounded-[2.5rem] lg:px-16 lg:py-14">
          <AnimateOnScroll className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center rounded-[4px] bg-primary px-3 py-1 text-white">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase">Quick Links</span>
            </div>
            <h2 className="font-neulis text-[clamp(1.5rem,1.2rem+1.5vw,2.25rem)] font-medium text-text">{title}</h2>
          </AnimateOnScroll>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {links.map((link, index) => (
              <AnimateOnScroll key={link.href} animation="animate-fade-up" delay={index * 80}>
                <Link
                  to={link.href}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  {link.label}
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
