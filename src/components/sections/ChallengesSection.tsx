import { challengeBadges, painPoints } from '../../data/content'
import { CheckBadgeIcon } from '../icons/Icons'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function ChallengesSection() {
  return (
    <section className="section-challenges py-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <AnimateOnScroll
            animation="animate-slide-left"
            className="order-2 w-full shrink-0 lg:order-1 lg:w-[48%]"
          >
            <div className="mb-6 inline-flex items-center rounded-[4px] bg-primary px-2 py-1 text-white">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase">Common Challenges</span>
            </div>

            <h2 className="mb-1 font-neulis text-[clamp(1.375rem,0.8441rem+2.2654vw,3.5625rem)] leading-[1.1] font-medium text-text">
              Your Mortgage Broker
              <br />
              for Financial Freedom
            </h2>
            <p className="mb-7 font-neuliscursive text-[clamp(1.375rem,0.8441rem+2.2654vw,3.5625rem)] leading-[1.15] font-semibold text-accent">
              Work With Specialists Who Care
            </p>

            <p className="mb-9 max-w-[460px] text-[clamp(0.875rem,0.8295rem+0.1942vw,1.0625rem)] leading-relaxed font-medium text-text">
              With financial services offices now available in both Launceston and Bondi, Sydney, we&apos;re here to help
              you reach your goals with expert mortgage advice and access to 60+ lenders.
            </p>

            <ul className="flex flex-col gap-5">
              {painPoints.map((point) => (
                <li key={point.strong} className="flex items-start gap-3">
                  <CheckBadgeIcon />
                  <span className="text-[clamp(0.875rem,0.8447rem+0.1294vw,1rem)] leading-relaxed text-text">
                    <strong className="font-medium">{point.strong}</strong>
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <div className="relative order-1 flex w-full justify-center lg:order-2 lg:flex-1 lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              <img
                src="/assets/images/challenges-img.png"
                alt="Woman looking stressed at laptop researching home loans"
                className="h-auto w-full rounded-2xl object-cover"
                loading="lazy"
                width={510}
                height={534}
              />

              {challengeBadges.map((badge) => (
                <div
                  key={badge.text}
                  className={`${badge.className} px-4 py-4 text-[10px] font-medium tracking-[0.12em] uppercase shadow-lg whitespace-nowrap md:px-8 lg:text-xs`}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
