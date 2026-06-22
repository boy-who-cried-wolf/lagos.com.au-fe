import { services } from '../../data/content'
import { PlusIcon } from '../icons/Icons'

export function ServicesSection() {
  return (
    <section id="services" className="section-services py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center lg:mb-14">
          <div className="mb-5 inline-flex items-center rounded-full bg-[#85ADD5] px-3 py-2 text-white">
            <span className="text-xsm font-bold uppercase">Our Services</span>
          </div>
          <h2 className="mb-4 font-neuliscursive text-[clamp(1.375rem,0.9806rem+1.6828vw,3rem)] leading-[1.1] font-bold text-[#064068]">
            Your Home Loan Options
          </h2>
          <p className="text-[clamp(1rem,0.9393rem+0.2589vw,1.25rem)] font-normal text-[#4A5565]">
            Whatever your property goal, we&apos;ll find the right loan.
          </p>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
          {services.map((service) => (
            <a
              key={service.title}
              href="#services"
              className={`service-card group relative block overflow-hidden rounded-2xl ${
                service.wide
                  ? 'aspect-[622/400] w-[90%] xsm:w-[80%] sm:w-[50%] md:w-[49%] xl:w-[49.2%]'
                  : 'aspect-[411/400] w-[90%] xsm:w-[80%] sm:w-[50%] md:w-[32%] 2xl:w-[32.5%]'
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.30)_50%,rgba(0,0,0,0.70)_100%)]" />

              <div
                className={`absolute inset-0 flex flex-col justify-between ${
                  service.wide ? 'p-5 lg:p-7' : 'p-5'
                }`}
              >
                <div className="flex h-9 w-full shrink-0 items-center justify-between gap-3 rounded-full border-2 border-white/70 px-4 transition-colors duration-300 group-hover:bg-white/20">
                  <h3
                    className={`min-w-0 flex-1 font-neulis leading-tight font-bold text-white ${
                      service.wide
                        ? 'text-lg lg:text-2xl'
                        : 'text-[clamp(1.125rem,1.034rem+0.3883vw,1.5rem)]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                    <PlusIcon />
                  </span>
                </div>

                <p
                  className={`font-inter leading-normal font-medium text-white ${
                    service.wide
                      ? 'text-sm lg:text-base'
                      : 'text-[clamp(0.875rem,0.8447rem+0.1294vw,1rem)]'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
