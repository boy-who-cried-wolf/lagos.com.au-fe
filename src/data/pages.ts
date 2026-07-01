import pagesData from './pages.json'

export type PageSection = {
  title: string
  content: string
}

export type PageMeta = {
  title: string
  description: string
  path: string
  eyebrow?: string
  heading: string
  subheading?: string
  sections?: PageSection[]
  contentHtml?: string
  heroImage?: string
  ctaLabel?: string
}

export const pages: Record<string, PageMeta> = pagesData.pages
