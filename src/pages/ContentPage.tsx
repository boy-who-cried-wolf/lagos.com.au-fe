import { pages } from '../data/pages'
import {
  defaultRelatedLinks,
  pageAccentLines,
  pageHeroImages,
  relatedLinksByPath,
} from '../data/pageExtras'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { PageArticleContent } from '../components/layout/PageArticleContent'
import { RelatedLinksSection } from '../components/layout/RelatedLinksSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CtaSection } from '../components/sections/CtaSection'

type ContentPageProps = {
  pageKey: string
}

const legalPages = new Set(['/privacy-policy', '/terms-of-use'])
const guidePages = new Set([
  '/buying-a-property',
  '/refinance-your-home',
  '/property-investment',
  '/construction-loan',
  '/commercial-property',
  '/smsf-loans-property-investment',
  '/home-loan',
  '/car-loan',
  '/home-equity-loan',
  '/finance',
])
const testimonialPages = new Set(['/about-us', '/bondi', '/launceston'])

function pageVariant(pageKey: string): 'default' | 'guide' | 'legal' {
  if (legalPages.has(pageKey)) return 'legal'
  if (guidePages.has(pageKey)) return 'guide'
  return 'default'
}

export function ContentPage({ pageKey }: ContentPageProps) {
  const page = pages[pageKey]

  if (!page) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-neulis text-3xl text-text">Page not found</h1>
      </div>
    )
  }

  const isLegal = legalPages.has(pageKey)
  const relatedLinks = relatedLinksByPath[pageKey] ?? (isLegal ? [] : defaultRelatedLinks)
  const heroImage = page.heroImage || pageHeroImages[pageKey]
  const variant = pageVariant(pageKey)

  return (
    <>
      <Seo title={page.title} description={page.description} path={page.path} />
      <PageHero
        eyebrow={page.eyebrow}
        heading={page.heading}
        accentLine={pageAccentLines[pageKey]}
        subheading={page.subheading}
        ctaLabel={page.ctaLabel}
        pagePath={pageKey}
        imageSrc={heroImage}
        imageAlt={page.heading}
        secondaryCtaLabel={isLegal ? 'Contact Us' : 'All Services'}
        secondaryCtaHref={isLegal ? '/contact' : '/finance'}
      />

      {page.contentHtml ? (
        <section className="section-page-content py-16 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <PageArticleContent html={page.contentHtml} variant={variant} />
            </div>
          </div>
        </section>
      ) : null}

      {testimonialPages.has(pageKey) ? <TestimonialsSection /> : null}
      {!isLegal ? <RelatedLinksSection links={relatedLinks} /> : null}
      <CtaSection />
    </>
  )
}
