import { Seo } from '../components/seo/Seo'
import { PageHero } from '../components/layout/PageHero'
import { OfficeCardsSection } from '../components/layout/OfficeCardsSection'
import { ContactFormSection } from '../components/sections/ContactFormSection'
import { LendersSection } from '../components/sections/LendersSection'
import { CtaSection } from '../components/sections/CtaSection'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Lagos Financial | Book a Complimentary Assessment"
        description="Speak with a Lagos Financial mortgage broker in Bondi or Launceston. Book your complimentary assessment today."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        heading="Speak To Us"
        accentLine="Let's Talk."
        subheading="Ready to take the next step? Book a complimentary assessment or get in touch with our Bondi or Launceston team."
        ctaLabel="Book a Complimentary Assessment"
        ctaHref="#contact-form"
        pagePath="/contact"
        secondaryCtaLabel="View FAQ's"
        secondaryCtaHref="/frequently-asked-questions"
      />
      <LendersSection />
      <OfficeCardsSection />
      <ContactFormSection />
      <CtaSection />
    </>
  )
}
