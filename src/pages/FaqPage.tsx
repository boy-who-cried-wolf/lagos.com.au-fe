import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { faqItems } from '../data/pages'
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll'
import { AccordionItem } from '../components/ui/AccordionItem'
import { LendersSection } from '../components/sections/LendersSection'
import { CtaSection } from '../components/sections/CtaSection'

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Seo
        title="Frequently Asked Questions - Lagos Financial"
        description="Answers to common questions about mortgage broking, loan approval, costs, and services at Lagos Financial."
        path="/frequently-asked-questions"
      />
      <PageHero
        eyebrow="FAQ's"
        heading="Frequently Asked Questions"
        accentLine="Got Questions?"
        subheading="Clear answers about mortgage broking, loan approval times, costs, and how Lagos Financial can help you."
        pagePath="/frequently-asked-questions"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
      <LendersSection />

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
            <AnimateOnScroll
              animation="animate-slide-left"
              className="order-2 w-full shrink-0 lg:order-1 lg:w-[42%]"
            >
              <div className="mb-6 inline-flex items-center rounded-[4px] bg-primary px-2 py-1 text-white">
                <span className="text-xs font-semibold tracking-[0.15em] uppercase">Common Questions</span>
              </div>

              <h2 className="mb-1 font-neulis text-[clamp(1.375rem,0.8441rem+2.2654vw,2.75rem)] leading-[1.1] font-medium text-text">
                Honest Answers.
                <br />
                No Jargon.
              </h2>
              <p className="mb-7 font-neuliscursive text-[clamp(1.375rem,0.8441rem+2.2654vw,2.5rem)] leading-[1.15] font-semibold text-accent">
                We&apos;re Here to Help
              </p>

              <p className="mb-8 max-w-[460px] text-sm leading-relaxed font-medium text-text lg:text-base">
                Whether you&apos;re buying your first home, refinancing, or investing — these are the questions we hear
                most from clients across Bondi, Launceston, and Australia-wide.
              </p>

              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <img
                  src="/assets/images/challenges-img.png"
                  alt="Mortgage broker consultation"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>

            <div className="order-1 flex w-full flex-col gap-3 lg:order-2 lg:flex-1">
              {faqItems.map((item, index) => (
                <AnimateOnScroll key={item.question} animation="animate-slide-right" delay={index * 60}>
                  <AccordionItem
                    id={`faq-${index}`}
                    title={item.question}
                    open={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <p className="font-inter text-sm leading-relaxed text-text/80 lg:text-base">{item.answer}</p>
                  </AccordionItem>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <AnimateOnScroll className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center lg:p-10">
            <p className="mb-2 font-neulis text-xl font-semibold text-white lg:text-2xl">Still have questions?</p>
            <p className="mb-6 font-inter text-sm text-white/80 lg:text-base">
              Book a complimentary assessment and speak with a mortgage specialist today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-85"
            >
              Contact Us
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
