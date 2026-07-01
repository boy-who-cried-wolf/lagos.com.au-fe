import faqData from './faq.json'

export type FaqItem = {
  question: string
  answer: string
}

export type FaqCategory = {
  title: string
  items: FaqItem[]
}

export const faqPage = {
  heading: faqData.heading,
  subheading: faqData.subheading,
} as const

export const faqCategories: readonly FaqCategory[] = faqData.categories

/** Flat list for backwards compatibility */
export const faqItems = faqCategories.flatMap((category) => category.items)
