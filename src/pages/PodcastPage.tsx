import { Link } from 'react-router-dom'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { podcastContent } from '../data/content'
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll'
import { LendersSection } from '../components/sections/LendersSection'
import { CtaSection } from '../components/sections/CtaSection'

const podcastBlocks = [
  {
    title: 'About the Podcast',
    content:
      "Welcome to the Debt to Financial Freedom Podcast. I'm your host Victor Lagos and the founder of Lagos Financial.",
  },
  {
    title: 'Why I Started It',
    content:
      "I've been in the finance and lending industry for 17 years and I've personally made financial mistakes and learned from them. I started this podcast to share stories and lessons on my own journey.",
  },
  {
    title: 'Our Mission',
    content:
      'My goal is to share raw, honest, transparent, and helpful stories that you can relate to — and inspire you to take control of your finances and only have debt that brings you closer to financial freedom.',
  },
] as const

export function PodcastPage() {
  return (
    <>
      <Seo
        title="Debt to Financial Freedom Podcast | Lagos Financial"
        description="Listen to the Debt to Financial Freedom Podcast hosted by Victor Lagos. Honest stories and lessons on the path to financial freedom."
        path="/podcast"
      />
      <PageHero
        eyebrow={podcastContent.eyebrow}
        heading={podcastContent.title}
        accentLine="Real Stories."
        subheading={podcastContent.description}
        pagePath="/podcast"
        secondaryCtaLabel="Episode Show Notes"
        secondaryCtaHref="https://lagosfinancial.com.au/podcast/"
      />
      <LendersSection />

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center rounded-md bg-primary px-5 py-1.5 text-white">
              <span className="text-sm font-semibold tracking-[0.15em] uppercase">Hosted by Victor Lagos</span>
            </div>
            <h2 className="font-neuliscursive text-[clamp(1.375rem,0.8441rem+2.2654vw,2.5rem)] font-medium text-accent">
              Honest Stories. Real Lessons.
            </h2>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {podcastBlocks.map((block, index) => (
              <AnimateOnScroll key={block.title} animation="animate-fade-up" delay={index * 100}>
                <article className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] lg:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <span className="text-xl leading-none font-bold text-white">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base font-bold text-primary lg:text-xl">{block.title}</h3>
                    <p className="text-sm leading-relaxed text-text lg:text-base">{block.content}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-10 text-center" delay={200}>
            <a
              href="https://lagosfinancial.com.au/podcast/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#d97a5a]"
            >
              Listen & Read Episode Show Notes
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="pb-8">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl">
            <div className="flex h-full flex-col items-center gap-5 rounded-2xl bg-primary p-8 text-center lg:p-10">
              <p className="max-w-2xl text-base leading-relaxed font-medium text-white lg:text-lg">
                {podcastContent.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-85"
              >
                Book a Complimentary Assessment
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
