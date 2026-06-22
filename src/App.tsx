import { Preloader } from './components/layout/Preloader'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Seo } from './components/seo/Seo'
import { HeroSection } from './components/sections/HeroSection'
import { LendersSection } from './components/sections/LendersSection'
import { ChallengesSection } from './components/sections/ChallengesSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ApproachSection } from './components/sections/ApproachSection'
import { ExclusiveSection } from './components/sections/ExclusiveSection'
import { LoanTypesSection } from './components/sections/LoanTypesSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { ContactFormSection } from './components/sections/ContactFormSection'
import { CtaSection } from './components/sections/CtaSection'
import { useScrollAnimations } from './hooks/useScrollAnimations'

function App() {
  useScrollAnimations()

  return (
    <>
      <Seo />
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <LendersSection />
        <ChallengesSection />
        <ServicesSection />
        <ApproachSection />
        <ExclusiveSection />
        <LoanTypesSection />
        <TestimonialsSection />
        <ContactFormSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
