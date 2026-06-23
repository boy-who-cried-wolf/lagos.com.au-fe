import { type FormEvent, useState } from 'react'
import { loanOptions } from '../../data/content'
import { ShieldIcon } from '../icons/Icons'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

type FormErrors = Partial<Record<'full_name' | 'contact_number' | 'email' | 'loanOption' | 'general', string>>

export function ContactFormSection() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (form: HTMLFormElement): FormErrors | null => {
    const data = new FormData(form)
    const next: FormErrors = {}
    const name = String(data.get('full_name') ?? '').trim()
    const phone = String(data.get('contact_number') ?? '').trim().replace(/\D/g, '')
    const email = String(data.get('email') ?? '').trim()
    const loan = String(data.get('loanOption') ?? '')

    if (!name) next.full_name = 'Please enter your first name.'
    if (!phone) next.contact_number = 'Please enter your phone number.'
    else if (!/^0[23478]\d{8}$/.test(phone))
      next.contact_number = 'Invalid phone number. Enter a 10-digit number starting with 0.'
    if (!email) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Please enter a valid email address.'
    if (!loan) next.loanOption = 'Please select a loan type.'

    return Object.keys(next).length ? next : null
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const validationErrors = validate(form)
    if (validationErrors) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      form.reset()
    }, 800)
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-xl border px-4 py-3.5 text-sm text-text placeholder-gray-400 bg-white transition-colors focus:outline-none ${
      errors[field] ? 'border-red-400' : 'border-gray-200 focus:border-primary'
    }`

  return (
    <section className="section-form py-16 lg:py-24" id="contact-form">
      <div className="mx-auto w-full max-w-2xl px-[var(--container-padding)]">
        <AnimateOnScroll animation="animate-on-scroll">
          <div className="mb-10 text-center lg:mb-12">
            <h2 className="mb-4 leading-[1.1]">
              <span className="block font-neuliscursive text-[28px] font-semibold text-accent sm:text-[38px] lg:text-[48px]">
                Ready To Find Out
              </span>
              <span className="block font-neuliscursive text-[28px] font-bold text-primary sm:text-[38px] lg:text-[48px]">
                What You Can Borrow?
              </span>
            </h2>
            <p className="text-inter text-sm text-[#4A5565] lg:text-base">
              Free, no obligation consultation with an experienced mortgage specialist.
            </p>
          </div>

          {submitted ? (
            <div className="motion-page-enter rounded-2xl bg-white p-8 text-center shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
              <p className="mb-2 font-neulis text-xl font-semibold text-primary">Thank you!</p>
              <p className="text-text">A mortgage expert will contact you shortly.</p>
            </div>
          ) : (
            <form className="motion-page-enter flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
              <input type="text" name="honeypot" defaultValue="" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form_name" className="text-sm font-medium text-[#364153]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="form_name"
                  name="full_name"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  className={inputClass('full_name')}
                  onChange={() => setErrors((prev) => ({ ...prev, full_name: undefined }))}
                />
                {errors.full_name && (
                  <span className="motion-page-enter text-xs text-red-500">{errors.full_name}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form_phone" className="text-sm font-medium text-[#364153]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="form_phone"
                  name="contact_number"
                  type="tel"
                  placeholder="Enter your phone number"
                  autoComplete="off"
                  maxLength={10}
                  inputMode="numeric"
                  required
                  className={inputClass('contact_number')}
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  onChange={() => setErrors((prev) => ({ ...prev, contact_number: undefined }))}
                />
                {errors.contact_number && (
                  <span className="text-xs text-red-500">{errors.contact_number}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form_email" className="text-sm font-medium text-[#364153]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="form_email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className={inputClass('email')}
                  onChange={() => setErrors((prev) => ({ ...prev, email: undefined }))}
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form_loan" className="text-sm font-medium text-[#364153]">
                  Loan Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="form_loan"
                    name="loanOption"
                    required
                    defaultValue=""
                    className={`${inputClass('loanOption')} appearance-none pr-10`}
                    onChange={() => setErrors((prev) => ({ ...prev, loanOption: undefined }))}
                  >
                    <option value="" disabled>
                      Select loan type
                    </option>
                    {loanOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg className="h-4 w-4 text-gray-400" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {errors.loanOption && <span className="text-xs text-red-500">{errors.loanOption}</span>}
              </div>

              {errors.general && <span className="-mt-2 text-xs text-red-500">{errors.general}</span>}

              <button
                type="submit"
                disabled={submitting}
                className={`mt-2 w-full rounded-full bg-secondary py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:scale-[1.01] hover:bg-[#e8795a] disabled:cursor-not-allowed disabled:opacity-60 ${
                  submitting ? 'form-submitting' : ''
                }`}
              >
                {submitting ? 'Sending…' : 'Check My Borrowing Power'}
              </button>

              <div className="mt-1 flex flex-col items-center gap-1.5">
                <p className="text-center text-xs text-[#99A1AF]">
                  No obligation. A mortgage expert will contact you shortly.
                </p>
                <div className="flex items-center gap-1.5 text-[#99A1AF]">
                  <ShieldIcon />
                  <span className="text-xs">Your details are safe and secure</span>
                </div>
              </div>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
