import { Link } from 'react-router-dom'
import { podcastContent } from '../../data/content'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function PodcastSection() {
  return (
    <section className="section-podcast py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center lg:mb-14">
          <div className="mb-5 inline-flex items-center rounded-md bg-primary px-5 py-1.5 text-white">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase">{podcastContent.eyebrow}</span>
          </div>
          <h2 className="leading-[1.1]">
            <span className="block font-neuliscursive text-[clamp(1.375rem,0.8441rem+2.2654vw,3.5625rem)] font-medium text-accent">
              {podcastContent.title}
            </span>
          </h2>
        </div>

        <AnimateOnScroll className="mx-auto max-w-3xl">
          <div className="flex h-full flex-col items-center gap-5 rounded-2xl bg-primary p-8 text-center lg:p-10">
            <div className="max-w-2xl space-y-4 text-base leading-relaxed font-medium text-white lg:text-lg">
              <p>{podcastContent.description}</p>
              {podcastContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              to="/podcast"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-85"
            >
              Episode show notes
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
