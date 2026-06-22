import { useState } from 'react'
import { LagosLogo } from '../icons/LagosLogo'
import { navLinks } from '../../data/content'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header fixed top-0 z-[999] w-full px-4 pt-4 pb-2 lg:px-8 lg:pt-5">
      <div
        id="nav-container"
        className={`mx-auto max-w-7xl bg-white px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 lg:px-8 ${
          menuOpen ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <nav className="flex items-center justify-between">
          <a href="/" className="flex shrink-0 items-center gap-3">
            <LagosLogo />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#064068] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden items-center whitespace-nowrap rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d97a5a] lg:inline-flex"
            >
              Let&apos;s Talk
            </a>

            <button
              type="button"
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] focus:outline-none lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block h-[2px] w-5 origin-center rounded-full bg-[#1a2e5a] transition-all duration-300 ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-[#1a2e5a] transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 origin-center rounded-full bg-[#1a2e5a] transition-all duration-300 ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden"
          style={{ maxHeight: menuOpen ? '400px' : '0' }}
        >
          <ul className="mt-3 flex flex-col gap-1 border-t border-gray-100 pt-4 pb-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#1a2e5a] transition-colors hover:bg-gray-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center rounded-full bg-[#e8896a] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d97a5a]"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
