import { Link } from 'react-router-dom'
import type { PageSection } from '../../data/pages'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

type ContentSectionsProps = {
  sections?: PageSection[]
  eyebrow?: string
  heading?: string
  accentLine?: string
}

export function ContentSections({ sections, eyebrow = 'Details', heading = 'What You Need To Know', accentLine }: ContentSectionsProps) {
  if (!sections?.length) return null

  return (
    <section className="section-page-content py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 flex justify-center lg:mb-16">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#064068] px-8 py-3.5 text-[clamp(1rem,0.9697rem+0.1294vw,1.125rem)] font-semibold text-white transition-opacity hover:opacity-85"
          >
            Book a Complimentary Assessment
          </Link>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          <AnimateOnScroll
            animation="animate-slide-left"
            className="flex w-full shrink-0 flex-col items-center md:items-start lg:w-[38%] lg:sticky lg:top-28 lg:self-start"
          >
            <div className="mb-6 inline-flex items-center rounded-full bg-[#064068] px-3 py-2 text-white">
              <span className="text-xs font-bold uppercase">{eyebrow}</span>
            </div>

            <h2 className="mb-4 text-center leading-[1.15] md:text-left">
              <span className="block font-neulis text-[clamp(1.5rem,1.2rem+1.5vw,2.5rem)] font-semibold text-primary">
                {heading}
              </span>
              {accentLine ? (
                <span className="mt-2 block font-neuliscursive text-[clamp(1.5rem,1.2rem+1.5vw,2.25rem)] font-semibold text-accent">
                  {accentLine}
                </span>
              ) : null}
            </h2>

            <p className="max-w-sm text-center text-sm leading-relaxed text-text/70 md:text-left lg:text-base">
              Expert guidance from our Bondi and Launceston teams, with access to 60+ lenders across Australia.
            </p>
          </AnimateOnScroll>

          <div className="flex w-full flex-col gap-4 lg:flex-1">
            {sections.map((section, index) => (
              <AnimateOnScroll key={section.title} animation="animate-slide-right" delay={(index % 3) * 100 + 100}>
                <article className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] lg:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <span className="text-xl leading-none font-bold text-white">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base font-bold text-primary lg:text-xl">{section.title}</h3>
                    <p className="text-sm leading-relaxed text-text lg:text-base">{section.content}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
