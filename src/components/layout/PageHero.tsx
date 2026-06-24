import { Link } from 'react-router-dom'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'
import { pageHeroImages } from '../../data/pageExtras'

type PageHeroProps = {
  eyebrow?: string
  heading: string
  accentLine?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  pagePath?: string
  imageSrc?: string
  imageAlt?: string
}

export function PageHero({
  eyebrow,
  heading,
  accentLine,
  subheading,
  ctaLabel = 'Book a Complimentary Assessment',
  ctaHref = '/contact',
  secondaryCtaLabel = 'Learn More',
  secondaryCtaHref = '/about-us',
  pagePath = '/',
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  const heroImage = imageSrc ?? pageHeroImages[pagePath] ?? '/assets/images/challenges-img.png'
  const alt = imageAlt ?? heading

  const renderCta = (href: string, label: string, primary = false) => {
    const className = primary
      ? 'inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85'
      : 'inline-flex items-center justify-center rounded-full border border-solid border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white'

    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      )
    }

    if (href.startsWith('#')) {
      return (
        <a href={href} className={className}>
          {label}
        </a>
      )
    }

    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <section className="section-page-hero page-hero-gradient-bg overflow-hidden pt-28 pb-0 lg:pt-36">
      <div className="container">
        <AnimateOnScroll animation="animate-fade-in">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-inter text-xs font-medium tracking-wide text-text/45 uppercase">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-text/25">
                /
              </li>
              <li className="text-primary">{eyebrow ?? heading}</li>
            </ol>
          </nav>
        </AnimateOnScroll>

        <div className="flex flex-col gap-10 pb-14 lg:flex-row lg:items-center lg:gap-16 lg:pb-20">
          <div className="w-full lg:w-[55%]">
            {eyebrow ? (
              <AnimateOnScroll animation="animate-slide-left">
                <div className="mb-6 inline-flex items-center rounded-[4px] bg-secondary px-4 py-1.5">
                  <span className="text-sm font-medium tracking-[1px] text-white uppercase">{eyebrow}</span>
                </div>
              </AnimateOnScroll>
            ) : null}

            <AnimateOnScroll animation="animate-slide-left" delay={100}>
              <h1 className="mb-3 font-neulis text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] leading-[1.1] font-medium text-text">
                {heading}
              </h1>
            </AnimateOnScroll>

            {accentLine ? (
              <AnimateOnScroll animation="animate-slide-left" delay={200}>
                <p className="mb-7 font-neuliscursive text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-[1.1] font-bold text-accent">
                  {accentLine}
                </p>
              </AnimateOnScroll>
            ) : null}

            {subheading ? (
              <AnimateOnScroll animation="animate-slide-left" delay={300}>
                <p className="mb-9 max-w-[480px] font-inter text-sm leading-relaxed font-medium text-text lg:text-base">
                  {subheading}
                </p>
              </AnimateOnScroll>
            ) : null}

            <AnimateOnScroll animation="animate-slide-left" delay={accentLine ? undefined : 200}>
              <div className="flex flex-wrap items-center gap-3">
                {renderCta(ctaHref, ctaLabel, true)}
                {renderCta(secondaryCtaHref, secondaryCtaLabel)}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in" delay={400}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-secondary/20 pt-6">
                <span className="font-inter text-xs font-medium tracking-wide text-text/50 uppercase">
                  60+ Lenders
                </span>
                <span className="hidden h-3 w-px bg-secondary/25 sm:block" aria-hidden="true" />
                <span className="font-inter text-xs font-medium tracking-wide text-text/50 uppercase">
                  Bondi & Launceston
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="animate-slide-right" className="w-full lg:w-[45%]">
            <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div
                className="absolute -top-3 -right-3 h-full w-full rounded-2xl bg-secondary/30 lg:-top-4 lg:-right-4"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                <img
                  src={heroImage}
                  alt={alt}
                  className="aspect-[5/4] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(255,163,124,0.18)_100%)]" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
