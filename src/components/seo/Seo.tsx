import { useEffect } from 'react'
import { offices } from '../../data/content'

const SEO_TITLE = 'Lagos Financial | Australian Mortgage Specialists'
const SEO_DESCRIPTION =
  'Expert mortgage advice, refinancing support, pre-approvals, and borrowing power assessments to help Australians secure the right home loan.'
const SEO_IMAGE_PATH = '/assets/images/header-logo.svg'

export function Seo() {
  useEffect(() => {
    const origin = window.location.origin
    const canonicalUrl = new URL('/', origin).toString()
    const ogImageUrl = new URL(SEO_IMAGE_PATH, origin).toString()

    document.title = SEO_TITLE

    const setMeta = (
      selector: string,
      attributeName: 'name' | 'property',
      attributeValue: string,
      content: string,
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attributeName, attributeValue)
        document.head.appendChild(element)
      }
      element.content = content
    }

    const setLink = (rel: string, href: string) => {
      let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.rel = rel
        document.head.appendChild(element)
      }
      element.href = href
    }

    setMeta('meta[name="description"]', 'name', 'description', SEO_DESCRIPTION)
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', SEO_TITLE)
    setMeta('meta[property="og:description"]', 'property', 'og:description', SEO_DESCRIPTION)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImageUrl)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', SEO_TITLE)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', SEO_DESCRIPTION)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImageUrl)
    setLink('canonical', canonicalUrl)

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      '@id': canonicalUrl,
      name: 'Lagos Financial',
      url: canonicalUrl,
      image: ogImageUrl,
      description: SEO_DESCRIPTION,
      email: 'customer@lagosfinancial.com.au',
      areaServed: 'Australia',
      slogan: 'Australian Mortgage Specialists',
      telephone: '+61483969782',
      contactPoint: offices.map((office) => ({
        '@type': 'ContactPoint',
        contactType: office.name,
        telephone: office.tel.startsWith('0') ? `+61${office.tel.slice(1)}` : office.tel,
        areaServed: 'AU',
      })),
      department: offices.map((office) => ({
        '@type': 'LocalBusiness',
        name: office.name,
        telephone: office.tel.startsWith('0') ? `+61${office.tel.slice(1)}` : office.tel,
        address: {
          '@type': 'PostalAddress',
          streetAddress: office.address,
          addressCountry: 'AU',
        },
      })),
      knowsAbout: [
        'Home loans',
        'Refinancing',
        'Pre-approval',
        'First home buyer loans',
        'Investment property loans',
        'Borrowing power assessments',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mortgage Services',
        itemListElement: [
          'First Home Buyer Loans',
          'Home Loans',
          'Refinancing',
          'Investment Property Loans',
          'Borrowing Power Assessment',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name,
          },
        })),
      },
    }

    let script = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo="structured-data"]',
    )
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seo = 'structured-data'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)
  }, [])

  return null
}
