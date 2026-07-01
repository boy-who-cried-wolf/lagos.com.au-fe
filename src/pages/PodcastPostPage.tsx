import { Link, useParams } from 'react-router-dom'
import { getPodcastEpisode, podcastEpisodes } from '../data/podcasts'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { BlogArticleContent } from '../components/layout/BlogArticleContent'
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll'
import { PlusIcon } from '../components/icons/Icons'
import { CtaSection } from '../components/sections/CtaSection'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function PodcastPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const episode = getPodcastEpisode(slug)

  if (!episode) {
    return (
      <div className="container py-32 text-center">
        <h1 className="mb-4 font-neulis text-3xl text-text">Episode not found</h1>
        <Link to="/podcast" className="text-sm font-semibold text-primary hover:underline">
          Back to Podcast
        </Link>
      </div>
    )
  }

  const relatedEpisodes = podcastEpisodes.filter((item) => item.slug !== episode.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${episode.title} | Lagos Financial Podcast`}
        description={episode.excerpt}
        path={`/podcast/${episode.slug}`}
      />
      <PageHero
        eyebrow="Podcast"
        heading={episode.title}
        accentLine="Real Stories."
        subheading={episode.excerpt}
        pagePath="/podcast"
        imageSrc={episode.image}
        imageAlt={episode.title}
        secondaryCtaLabel="All Episodes"
        secondaryCtaHref="/podcast"
      />

      <article className="py-16 lg:py-24">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-3xl">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-primary/10 pb-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-inter text-sm text-text/60">
                <time dateTime={episode.date}>{formatDate(episode.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{episode.author}</span>
                <span aria-hidden="true">·</span>
                <span>Podcast</span>
              </div>
              <Link
                to="/podcast"
                className="font-inter text-sm font-semibold text-primary transition-opacity hover:opacity-75"
              >
                ← Back to Podcast
              </Link>
            </div>

            <BlogArticleContent html={episode.contentHtml} />
          </AnimateOnScroll>
        </div>
      </article>

      {relatedEpisodes.length > 0 ? (
        <section className="pb-16 lg:pb-24">
          <div className="container">
            <AnimateOnScroll className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center rounded-[4px] bg-secondary px-4 py-1.5">
                <span className="text-sm font-medium tracking-[1px] text-white uppercase">More Episodes</span>
              </div>
              <h2 className="font-neulis text-[clamp(1.5rem,1.2rem+1.5vw,2.25rem)] font-medium text-text">
                Continue Listening
              </h2>
            </AnimateOnScroll>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedEpisodes.map((item, index) => (
                <AnimateOnScroll key={item.slug} animation="animate-fade-up" delay={index * 80} className="h-full">
                  <Link
                    to={`/podcast/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.55)_100%)]" />
                    </div>

                    <div className="flex flex-1 flex-col p-5 lg:p-6">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h3 className="font-neulis text-base font-bold text-primary lg:text-lg">{item.title}</h3>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 transition-colors group-hover:border-primary group-hover:bg-primary">
                          <PlusIcon className="h-3.5 w-3.5 text-primary group-hover:text-white" />
                        </span>
                      </div>
                      <p className="mb-4 flex-1 font-inter text-sm leading-relaxed text-text/75">{item.excerpt}</p>
                      <span className="text-sm font-semibold text-secondary transition-colors group-hover:text-primary">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection />
    </>
  )
}
