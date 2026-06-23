import { type ReactNode } from 'react'
import { AnimatedCollapse } from './AnimatedCollapse'

type AccordionItemProps = {
  title: string
  open: boolean
  onToggle: () => void
  children: ReactNode
  id: string
}

export function AccordionItem({ title, open, onToggle, children, id }: AccordionItemProps) {
  return (
    <div className={`accordion-item overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ${
      open ? 'border-primary/20 shadow-[0_4px_24px_rgba(35,57,91,0.08)]' : 'border-primary/10'
    }`}>
      <button
        type="button"
        id={`${id}-trigger`}
        className="accordion-trigger flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <span className="font-neulis text-base font-medium text-[#064068] transition-colors duration-300 lg:text-lg">
          {title}
        </span>
        <span
          className={`accordion-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-lg leading-none text-secondary transition-[transform,background-color] duration-300 ${
            open ? 'rotate-180 bg-secondary/25' : ''
          }`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      <AnimatedCollapse open={open}>
        <div
          id={`${id}-panel`}
          role="region"
          aria-labelledby={`${id}-trigger`}
          className="accordion-panel border-t border-primary/10 px-5 py-4"
        >
          {children}
        </div>
      </AnimatedCollapse>
    </div>
  )
}
