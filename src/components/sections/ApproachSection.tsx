import { approachSteps } from '../../data/content'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function ApproachSection() {
  return (
    <section id="how-it-works" className="section-approach py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 flex justify-center lg:mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#064068] px-8 py-3.5 text-[clamp(1rem,0.9697rem+0.1294vw,1.125rem)] font-semibold text-white transition-opacity hover:opacity-85"
          >
            Talk To A Mortgage Expert Today
          </a>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          <AnimateOnScroll
            animation="animate-slide-left"
            className="flex w-full shrink-0 flex-col items-center md:items-start lg:w-[42%]"
          >
            <div className="mb-6 inline-flex items-center rounded-full bg-[#064068] px-3 py-2 text-white">
              <span className="text-xs font-bold uppercase">Our Approach</span>
            </div>

            <h2 className="mb-8 leading-[1.15]">
              <span className="block font-neuliscursive text-[32px] font-semibold text-accent sm:text-[40px] lg:text-[clamp(3.4375rem,3.0804rem+0.558vw,3.75rem)]">
                A Streamlined
              </span>
              <span className="block text-[32px] sm:text-[40px] lg:text-[60px]">
                <span className="font-neuliscursive font-semibold text-accent">Process</span>
                <span className="font-neulis font-semibold text-primary"> for</span>
              </span>
              <span className="block font-neulis text-[32px] font-semibold text-primary sm:text-[40px] lg:text-[60px]">
                Lasting Results
              </span>
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#064068] px-7 py-3.5 text-[clamp(1rem,0.9697rem+0.1294vw,1.125rem)] font-semibold text-white transition-opacity hover:opacity-85"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#exclusive"
                className="inline-flex items-center justify-center rounded-full border border-solid border-primary px-7 py-3.5 text-[clamp(1rem,0.9697rem+0.1294vw,1.125rem)] font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Learn More
              </a>
            </div>
          </AnimateOnScroll>

          <div className="flex w-full flex-col gap-4 lg:flex-1">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-xl leading-none font-bold text-white">{step.number}</span>
                </div>
                <div>
                  <h3 className="mb-1.5 text-base font-bold text-primary lg:text-2xl">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text lg:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
