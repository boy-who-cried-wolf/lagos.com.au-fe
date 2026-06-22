import { heroCards } from '../../data/content'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

function BuyHomeIcon() {
  return (
    <svg width="102" height="86" viewBox="0 0 102 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="32" width="54" height="54" rx="12" fill="#76C6B3" />
      <path
        d="M48.1689 2.83637C49.7316 1.27074 52.2684 1.27075 53.8311 2.83637L88.3543 37.4242C90.8705 39.9452 89.085 44.25 85.5232 44.25H16.4768C12.915 44.25 11.1295 39.9452 13.6457 37.4242L48.1689 2.83637Z"
        fill="#FFA37C"
      />
    </svg>
  )
}

function PreApprovalIcon() {
  return (
    <svg width="64" height="86" viewBox="0 0 64 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12">
      <rect x="13.3828" width="51.1" height="78.05" rx="7.35" transform="rotate(9.87297 13.3828 0)" fill="#F3F4F6" />
      <path
        d="M27.7296 28.3801C27.7296 28.3801 29.2074 28.6373 30.5777 32.4284C30.5777 32.4284 37.6259 24.3507 42.8083 23.3917"
        stroke="#76C6B3"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="16.8485" y1="44.2495" x2="45.419" y2="49.222" stroke="#064068" strokeWidth="4" strokeLinecap="round" />
      <line x1="15.4735" y1="52.1308" x2="44.044" y2="57.1033" stroke="#064068" strokeWidth="4" strokeLinecap="round" />
      <line x1="13.9305" y1="60.9975" x2="42.501" y2="65.97" stroke="#064068" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function RefinanceIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.9987 13.6509C18.3028 16.9856 7.33203 30.1282 7.33203 45.8332C7.33203 47.7072 7.48823 49.5446 7.78831 51.3332M32.9987 13.6509L21.9987 9.1665M32.9987 13.6509L29.332 23.8332M69.9019 60.4998C72.0975 56.0815 73.332 51.1014 73.332 45.8332C73.332 29.4817 61.4396 15.9079 45.832 13.2895M69.9019 60.4998L80.6654 53.1665M69.9019 60.4998L64.1654 49.4998M12.889 64.1665C18.809 73.0105 28.8905 78.8332 40.332 78.8332C48.7841 78.8332 56.4936 75.6556 62.332 70.4303M12.889 64.1665H25.6654M12.889 64.1665V76.9998"
        stroke="#064068"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.8801 61.484V59.144C35.4161 58.676 32.1761 55.652 32.1761 51.728H36.5681C36.5681 53.456 37.9361 54.86 39.8801 55.256V48.272C35.8121 47.372 32.6081 45.068 32.6081 41.072C32.6081 37.184 35.7041 34.412 39.8801 34.016V31.64H42.1121V34.016C46.3241 34.484 49.3481 37.364 49.3481 41.108H45.0281C45.0281 39.56 43.8401 38.336 42.1121 37.94V44.528C46.2161 45.5 49.7801 47.552 49.7801 51.8C49.7801 55.868 46.5041 58.748 42.1121 59.144V61.484H39.8801ZM37.0361 40.784C37.0361 42.116 38.0801 43.124 39.8801 43.88V37.904C38.2601 38.192 37.0361 39.308 37.0361 40.784ZM45.3881 52.196C45.3881 50.72 44.1641 49.64 42.1121 48.92V55.292C43.9841 54.968 45.3881 53.78 45.3881 52.196Z"
        fill="#76C6B3"
      />
    </svg>
  )
}

function EquityIcon() {
  return (
    <svg width="59" height="83" viewBox="0 0 59 83" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12">
      <rect y="5.09619" width="51.1" height="78.05" rx="7.35" transform="rotate(-5.72358 0 5.09619)" fill="#FFA37C" />
      <circle cx="16.4667" cy="51.8119" r="5.775" transform="rotate(-5.72358 16.4667 51.8119)" fill="#064068" />
      <circle cx="30.0487" cy="50.4505" r="5.775" transform="rotate(-5.72358 30.0487 50.4505)" fill="#064068" />
      <circle cx="43.6307" cy="49.0892" r="5.775" transform="rotate(-5.72358 43.6307 49.0892)" fill="#064068" />
      <circle cx="17.9159" cy="66.2894" r="5.775" transform="rotate(-5.72358 17.9159 66.2894)" fill="#064068" />
      <circle cx="31.4979" cy="64.9281" r="5.775" transform="rotate(-5.72358 31.4979 64.9281)" fill="#064068" />
      <circle cx="45.08" cy="63.5668" r="5.775" transform="rotate(-5.72358 45.08 63.5668)" fill="#064068" />
      <rect x="6.75781" y="12.8608" width="38.85" height="29.05" rx="5.95" transform="rotate(-5.72358 6.75781 12.8608)" fill="white" />
    </svg>
  )
}

const cardIcons = [BuyHomeIcon, PreApprovalIcon, RefinanceIcon, EquityIcon]

function handleCardClick(card: (typeof heroCards)[number]) {
  if (card.action === 'equity') {
    window.location.hash = 'contact'
    return
  }
  const script = document.createElement('script')
  script.src =
    'https://loanoptions-widget.s3.ap-southeast-2.amazonaws.com/hailo-distribution/main/hailo-distribution-build.js'
  localStorage.setItem('brokerId', '114')
  document.body.appendChild(script)
}

export function HeroSection() {
  return (
    <section id="about-us" className="section-banner overflow-hidden pt-28 pb-0 lg:pt-36">
      <div className="container">
        <div className="flex flex-col items-center gap-10 pb-14 md:flex-row lg:gap-16 lg:pb-20">
          <div className="w-full shrink-0 md:w-[52%]">
            <AnimateOnScroll animation="animate-slide-left">
              <div className="mb-6 inline-flex items-center rounded-[4px] bg-secondary px-4 py-1.5">
                <span className="text-sm font-medium tracking-[1px] text-white uppercase">
                  Australian Mortgage Specialists
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-left" delay={100}>
              <h1 className="mb-3 font-neulis text-[clamp(2.375rem,1.9806rem+1.6828vw,4rem)] leading-[1.1] font-medium text-text">
                Your Next Home Starts With the Right Loan.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-left" delay={200}>
              <p className="mb-7 font-neuliscursive text-[clamp(2.375rem,1.9806rem+1.6828vw,4rem)] leading-[1.1] font-bold text-accent">
                Let&apos;s Find It.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-left" delay={300}>
              <p className="mb-9 max-w-[420px] font-inter text-sm leading-relaxed font-medium text-text lg:text-base">
                Delivering expert mortgage advice and outcome-focused solutions that help Australians secure the
                right home loan for their goals.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-left">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-solid border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="w-full md:flex-1">
            <div className="mx-auto grid max-w-sm grid-cols-2 gap-3 sm:max-w-md sm:gap-4 lg:mx-0 lg:max-w-none">
              {heroCards.map((card, i) => {
                const Icon = cardIcons[i]
                return (
                  <button
                    key={card.label}
                    type="button"
                    onClick={() => handleCardClick(card)}
                    className="group flex cursor-pointer flex-col items-center rounded-2xl bg-white p-5 text-center shadow-[0_2px_18px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,0,0,0.12)] sm:p-7"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                      <Icon />
                    </div>
                    <span className="mb-1 block font-neulis text-sm font-medium text-primary">{card.prefix}</span>
                    <span className="font-neulis text-[clamp(1rem,0.9393rem+0.2589vw,1.25rem)] leading-[100%] font-medium text-primary">
                      {card.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[150%] sm:w-[120%] md:w-full">
        <img
          src="/assets/images/header-border-img.png"
          alt="Happy homeowners"
          className="block w-full object-cover object-top"
          loading="lazy"
          width={3840}
          height={430}
        />
      </div>
    </section>
  )
}
