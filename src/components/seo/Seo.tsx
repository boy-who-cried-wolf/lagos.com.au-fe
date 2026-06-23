import { useEffect } from 'react'
import { offices } from '../../data/content'

const DEFAULT_TITLE = 'Australian Mortgage Broker — 60+ Lenders | Lagos Financial'
const DEFAULT_DESCRIPTION =
  'Your mortgage broker for financial freedom. Expert home loans, refinancing, investment property and commercial finance across Bondi and Launceston.'
const SEO_IMAGE_PATH = '/assets/images/header-logo.svg'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

export function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
}: SeoProps) {
  useEffect(() => {
    const origin = window.location.origin
    const canonicalUrl = new URL(path, origin).toString()
    const ogImageUrl = new URL(SEO_IMAGE_PATH, origin).toString()

    document.title = title

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

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImageUrl)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImageUrl)
    setLink('canonical', canonicalUrl)

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      '@id': new URL('/', origin).toString(),
      name: 'Lagos Financial',
      url: new URL('/', origin).toString(),
      image: ogImageUrl,
      description: DEFAULT_DESCRIPTION,
      email: 'customer@lagosfinancial.com.au',
      areaServed: 'Australia',
      slogan: 'Your Mortgage Broker for Financial Freedom',
      telephone: '+61468010679',
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
  }, [title, description, path])

  return null
}
