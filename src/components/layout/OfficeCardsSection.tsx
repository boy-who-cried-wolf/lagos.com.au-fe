import { Link } from 'react-router-dom'
import { offices } from '../../data/content'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function OfficeCardsSection() {
  return (
    <section className="section-offices py-16 lg:py-20">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center lg:mb-14">
          <div className="mb-5 inline-flex items-center rounded-md bg-primary px-5 py-1.5 text-white">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase">Our Offices</span>
          </div>
          <h2 className="leading-[1.1]">
            <span className="block font-neuliscursive text-[clamp(1.375rem,0.8441rem+2.2654vw,3rem)] font-medium text-accent">
              Serving Our Community
            </span>
            <span className="block font-neulis text-[clamp(1.375rem,0.8441rem+2.2654vw,3rem)] font-medium text-text">
              Bondi & Launceston
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {offices.map((office, index) => (
            <AnimateOnScroll key={office.name} delay={(index * 100 + 100) as 100 | 200} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-primary p-8 text-center lg:p-10">
                <h3 className="font-neulis text-xl font-bold text-white lg:text-2xl">{office.name}</h3>
                <a
                  href={`tel:${office.tel}`}
                  className="font-inter text-lg font-semibold text-secondary transition-opacity hover:opacity-80"
                >
                  {office.phone}
                </a>
                <p className="font-inter text-sm leading-relaxed text-white/85 lg:text-base">{office.address}</p>
                <Link
                  to="/contact"
                  className="mt-auto inline-flex items-center justify-center self-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-85"
                >
                  Get In Touch
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
