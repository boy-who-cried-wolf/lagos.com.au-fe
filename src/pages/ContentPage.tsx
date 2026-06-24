import { pages } from '../data/pages'
import {
  defaultRelatedLinks,
  pageAccentLines,
  relatedLinksByPath,
} from '../data/pageExtras'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { ContentSections } from '../components/layout/ContentSections'
import { RelatedLinksSection } from '../components/layout/RelatedLinksSection'
import { CtaSection } from '../components/sections/CtaSection'

type ContentPageProps = {
  pageKey: string
}

const legalPages = new Set(['/privacy-policy', '/terms-of-use'])

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
        secondaryCtaLabel={isLegal ? 'Contact Us' : 'All Services'}
        secondaryCtaHref={isLegal ? '/contact' : '/finance'}
      />
      <ContentSections
        sections={page.sections}
        eyebrow={page.eyebrow}
        heading={isLegal ? 'Important Information' : 'How We Help'}
        accentLine={pageAccentLines[pageKey]}
      />
      {!isLegal ? <RelatedLinksSection links={relatedLinks} /> : null}
      <CtaSection />
    </>
  )
}
