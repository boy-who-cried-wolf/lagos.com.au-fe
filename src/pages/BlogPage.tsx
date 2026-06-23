import { Link } from 'react-router-dom'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { blogPosts } from '../data/pages'
import { blogPostImages } from '../data/pageExtras'
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll'
import { PlusIcon } from '../components/icons/Icons'
import { LendersSection } from '../components/sections/LendersSection'
import { CtaSection } from '../components/sections/CtaSection'

export function BlogPage() {
  return (
    <>
      <Seo
        title="Finance Blog | Lagos Financial"
        description="Mortgage tips, investment guides, and finance insights from Lagos Financial brokers."
        path="/blog"
      />
      <PageHero
        eyebrow="Blog"
        heading="Insights & Guides"
        accentLine="Learn & Grow."
        subheading="Practical finance articles to help you make confident property and lending decisions."
        pagePath="/blog"
        secondaryCtaLabel="All Services"
        secondaryCtaHref="/finance"
      />
      <LendersSection />

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center rounded-full bg-[#85ADD5] px-3 py-2 text-white">
              <span className="text-xsm font-bold uppercase">Latest Articles</span>
            </div>
            <h2 className="font-neuliscursive text-[clamp(1.375rem,0.9806rem+1.6828vw,2.5rem)] font-bold text-[#064068]">
              Finance Tips & Property Guides
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <AnimateOnScroll key={post.slug} animation="animate-fade-up" delay={index * 80}>
                <Link
                  to={`/${post.slug}`}
                  className="group relative block overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={blogPostImages[post.slug] ?? '/assets/images/services/service_1.png'}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.55)_100%)]" />
                    <time className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                      {post.date}
                    </time>
                  </div>

                  <div className="p-6 lg:p-7">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h2 className="font-neulis text-lg font-bold text-primary lg:text-xl">{post.title}</h2>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 transition-colors group-hover:border-primary group-hover:bg-primary/5">
                        <PlusIcon />
                      </span>
                    </div>
                    <p className="font-inter text-sm leading-relaxed text-text/75 lg:text-base">{post.excerpt}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-secondary transition-colors group-hover:text-primary">
                      Read more →
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
