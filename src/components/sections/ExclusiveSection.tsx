import { exclusiveServices } from '../../data/content'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

function ServiceIcon({ type }: { type: 'calculator' | 'chat' | 'document' }) {
  if (type === 'calculator') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="h-7 w-7 text-white">
        <path d="M21.0001 2.33331H7.00008C5.71142 2.33331 4.66675 3.37798 4.66675 4.66665V23.3333C4.66675 24.622 5.71142 25.6666 7.00008 25.6666H21.0001C22.2887 25.6666 23.3334 24.622 23.3334 23.3333V4.66665C23.3334 3.37798 22.2887 2.33331 21.0001 2.33331Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.33325 7H18.6666M18.6667 16.3333V21M18.6667 11.6667H18.6784M14 11.6667H14.0117M9.33325 11.6667H9.34492M14 16.3333H14.0117M9.33325 16.3333H9.34492M14 21H14.0117M9.33325 21H9.34492" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (type === 'chat') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="h-7 w-7 text-white">
        <path d="M9.21683 23.3333C11.4435 24.4756 14.0049 24.785 16.4395 24.2058C18.8741 23.6265 21.0218 22.1968 22.4955 20.1742C23.9693 18.1516 24.6722 15.6692 24.4775 13.1742C24.2829 10.6792 23.2035 8.33581 21.4339 6.56624C19.6644 4.79667 17.3209 3.71731 14.826 3.52267C12.331 3.32803 9.84855 4.0309 7.82595 5.50463C5.80336 6.97837 4.37364 9.12604 3.79442 11.5606C3.21521 13.9952 3.5246 16.5567 4.66683 18.7833L2.3335 25.6667L9.21683 23.3333Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="h-7 w-7">
      <path d="M17.4998 2.33331H6.99984C6.381 2.33331 5.78751 2.57915 5.34992 3.01673C4.91234 3.45432 4.6665 4.04781 4.6665 4.66665V23.3333C4.6665 23.9522 4.91234 24.5456 5.34992 24.9832C5.78751 25.4208 6.381 25.6666 6.99984 25.6666H20.9998C21.6187 25.6666 22.2122 25.4208 22.6498 24.9832C23.0873 24.5456 23.3332 23.9522 23.3332 23.3333V8.16665L17.4998 2.33331Z" stroke="#23395B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.3335 2.33331V6.99998C16.3335 7.61882 16.5793 8.21231 17.0169 8.6499C17.4545 9.08748 18.048 9.33331 18.6668 9.33331H23.3335M10.5 17.5L12.8333 19.8334L17.5 15.1667" stroke="#23395B" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ExclusiveSection() {
  return (
    <section id="exclusive" className="section-exclusive py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center lg:mb-14">
          <div className="mb-5 inline-flex items-center rounded-md bg-primary px-5 py-1.5 text-white">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase">Exclusive</span>
          </div>
          <h2 className="leading-[1.1]">
            <span className="block font-neuliscursive text-[clamp(1.375rem,0.8441rem+2.2654vw,3.5625rem)] font-medium text-accent">
              Free Services
            </span>
            <span className="block font-neulis text-[clamp(1.375rem,0.8441rem+2.2654vw,3.5625rem)] font-medium text-text">
              from Lagos
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-stretch">
          {exclusiveServices.map((service, i) => (
            <AnimateOnScroll
              key={service.title}
              delay={(i * 100 + 100) as 100 | 200 | 300}
              className="h-full"
            >
              <div className="flex h-full flex-col items-center gap-5 rounded-2xl bg-primary p-8 text-center">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${service.iconBg}`}>
                  <ServiceIcon type={service.icon} />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-2">
                  <h3 className="font-inter text-[clamp(1.375rem,1.0868rem+1.2298vw,2.5625rem)] leading-tight font-bold text-white">
                    {service.title}
                  </h3>
                  {'subtitle' in service && service.subtitle && (
                    <span className="text-[clamp(1rem,0.8786rem+0.5178vw,1.5rem)] font-medium text-white">
                      {service.subtitle}
                    </span>
                  )}
                  <p className="max-w-[220px] text-base leading-relaxed font-medium text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
