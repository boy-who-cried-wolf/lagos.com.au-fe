import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { faqCategories, faqPage } from '../data/faq'
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll'
import { AccordionItem } from '../components/ui/AccordionItem'
import { CtaSection } from '../components/sections/CtaSection'

export function FaqPage() {
  const [openKey, setOpenKey] = useState<string | null>('0-0')

  return (
    <>
      <Seo
        title="Frequently Asked Questions - Lagos Financial"
        description="Answers to common questions about mortgage broking, buying property, refinancing, investment, commercial finance, and SMSF loans."
        path="/frequently-asked-questions"
      />
      <PageHero
        eyebrow="FAQ's"
        heading={faqPage.heading}
        accentLine="Got Questions?"
        subheading={faqPage.subheading}
        pagePath="/frequently-asked-questions"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />

      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimateOnScroll className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-inter text-sm leading-relaxed text-text/75 lg:text-base">
              Explore our FAQs to find valuable insights, or speak directly with a mortgage expert for
              personalised advice.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Book Your Complimentary Assessment
            </Link>
          </AnimateOnScroll>

          <div className="mx-auto flex max-w-4xl flex-col gap-10">
            {faqCategories.map((category, categoryIndex) => (
              <AnimateOnScroll key={category.title} animation="animate-fade-up" delay={categoryIndex * 60}>
                <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] lg:p-8">
                  <div className="mb-5 inline-flex items-center rounded-[4px] bg-primary px-3 py-1.5 text-white">
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase">{category.title}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {category.items.map((item, itemIndex) => {
                      const key = `${categoryIndex}-${itemIndex}`
                      return (
                        <AccordionItem
                          key={key}
                          id={`faq-${key}`}
                          title={item.question}
                          open={openKey === key}
                          onToggle={() => setOpenKey(openKey === key ? null : key)}
                        >
                          <p className="font-inter text-sm leading-relaxed text-text/80 lg:text-base">{item.answer}</p>
                        </AccordionItem>
                      )
                    })}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
