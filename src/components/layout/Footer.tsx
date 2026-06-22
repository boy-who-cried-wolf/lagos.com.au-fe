import { offices } from '../../data/content'

export function Footer() {
  return (
    <footer className="site-footer mt-[-50px] rounded-t-[2rem] border-t border-primary/10 bg-bg pt-14 pb-8 lg:pt-16">
      <div className="container">
        <div className="flex flex-col gap-10 border-b border-primary/10 pb-10 md:flex-row lg:gap-8">
          <div className="flex flex-col gap-2 md:w-[40%]">
            <span className="text-xs font-semibold text-text md:text-sm lg:text-base">Email Us</span>
            <a
              href="mailto:customer@lagosfinancial.com.au"
              className="break-all text-[clamp(1rem,0.8786rem+0.5178vw,1.5rem)] font-semibold text-text transition-opacity hover:opacity-70"
            >
              customer@lagosfinancial.com.au
            </a>
          </div>

          {offices.map((office) => (
            <div key={office.name} className="flex flex-col gap-2 md:w-[20%]">
              <span className="text-xs font-semibold text-text md:text-sm lg:text-base">{office.name}</span>
              <p className="text-sm font-semibold text-text">
                <a href={`tel:${office.tel}`}>{office.phone}</a>
              </p>
              <p className="text-sm leading-relaxed text-text/60">{office.address}</p>
            </div>
          ))}

          <div className="flex items-start">
            <p className="max-w-[200px] font-neulis text-[clamp(1rem,0.9393rem+0.2589vw,1.25rem)] leading-snug font-medium text-text">
              Ready to take the next step in your financial journey?
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-b border-primary/10 py-6">
          <a href="#" className="text-sm text-text transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-text transition-colors hover:text-primary">
            Terms of Use
          </a>
        </div>

        <div className="flex flex-col items-center gap-6 pt-10 pb-2 sm:flex-row sm:items-end">
          <img
            src="/assets/images/services/footer-logo.svg"
            alt="Lagos Financial"
            className="h-auto w-full max-w-4xl text-primary"
            width={1140}
            height={241}
          />
        </div>

        <div className="mt-4 flex flex-col items-center gap-1 border-t border-primary/10 pt-8">
          <p className="text-center text-[11px] text-[#99A1AF] xsm:text-xs">
            Lagos Financial Pty Ltd (Australian Credit Licence number 546774)
          </p>
          <p className="text-center text-[11px] text-[#99A1AF] xsm:text-xs">
            &copy; {new Date().getFullYear()} Lagos Financial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
