import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function CtaSection() {
  return (
    <section className="section-cta overflow-hidden bg-primary pt-20 pb-[50px] lg:pt-28">
      <div className="container">
        <AnimateOnScroll className="flex flex-col items-center gap-7 text-center">
          <div className="inline-flex items-center rounded-md bg-accent px-5 py-1.5 text-primary">
            <span className="text-xs font-bold tracking-[0.18em] uppercase">Ready To Elevate?</span>
          </div>

          <h2 className="max-w-xl font-neulis text-[clamp(2rem,1.6511rem+1.4887vw,3.4375rem)] leading-[1.1] font-bold text-white">
            Proceed Toward Your Next Achievement
          </h2>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-text px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#about-us"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-text transition-opacity hover:opacity-80"
            >
              Learn More
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      <div className="w-[150%] pt-10 sm:w-[120%] md:w-full">
        <img
          src="/assets/images/footer-border-img.png"
          alt=""
          className="block w-full object-cover object-top"
          loading="lazy"
          width={2185}
          height={300}
        />
      </div>
    </section>
  )
}
