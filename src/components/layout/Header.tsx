import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LagosLogo } from '../icons/LagosLogo'
import { mainNav, type NavItem } from '../../data/navigation'
import { AnimatedCollapse } from '../ui/AnimatedCollapse'

function NavDropdown({ item, onNavigate }: { item: Extract<NavItem, { type: 'dropdown' }>; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <li className="relative">
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-[#064068] transition-opacity hover:opacity-60"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((prev) => !prev)}
        >
          {item.label}
          <span className={`nav-dropdown-trigger-icon text-xs ${open ? 'is-open' : ''}`} aria-hidden>
            ▾
          </span>
        </button>

        <div className={`nav-dropdown-panel absolute top-full left-0 z-50 min-w-[240px] pt-2 ${open ? 'is-open' : ''}`}>
          <ul className="rounded-2xl border border-gray-100 bg-white py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            {item.items.map((link) => (
              <li key={link.href} className="nav-dropdown-item">
                <Link
                  to={link.href}
                  onClick={() => {
                    setOpen(false)
                    onNavigate()
                  }}
                  className="block px-4 py-2.5 text-sm text-[#064068] transition-[background-color,color,padding] duration-200 hover:bg-gray-50 hover:pl-5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

function MobileNavGroup({
  item,
  onNavigate,
  index,
}: {
  item: Extract<NavItem, { type: 'dropdown' }>
  onNavigate: () => void
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <li style={{ animationDelay: `${index * 40}ms` }}>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold tracking-wide text-text/50 uppercase transition-colors hover:bg-gray-50"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {item.label}
        <span className={`nav-dropdown-trigger-icon text-secondary ${open ? 'is-open' : ''}`} aria-hidden>
          ▾
        </span>
      </button>
      <AnimatedCollapse open={open} innerClassName="pl-2">
        <ul className="pb-1">
          {item.items.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={onNavigate}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-[#1a2e5a] transition-colors hover:bg-gray-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </AnimatedCollapse>
    </li>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const renderNavItem = (item: NavItem, mobile = false, index = 0) => {
    if (item.type === 'link') {
      return (
        <li
          key={item.href}
          className={mobile ? 'mobile-nav-link' : undefined}
          style={mobile ? { animationDelay: `${index * 40}ms` } : undefined}
        >
          <Link
            to={item.href}
            onClick={mobile ? closeMenu : undefined}
            className={
              mobile
                ? 'block rounded-xl px-3 py-2.5 text-sm font-medium text-[#1a2e5a] transition-colors hover:bg-gray-50'
                : 'text-sm font-medium text-[#064068] transition-opacity hover:opacity-60'
            }
          >
            {item.label}
          </Link>
        </li>
      )
    }

    if (mobile) {
      return <MobileNavGroup key={item.label} item={item} onNavigate={closeMenu} index={index} />
    }

    return <NavDropdown key={item.label} item={item} onNavigate={closeMenu} />
  }

  return (
    <header className="site-header fixed top-0 z-[999] w-full px-4 pt-4 pb-2 lg:px-8 lg:pt-5">
      <div
        id="nav-container"
        className={`mx-auto max-w-7xl bg-white px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 lg:px-8 ${
          menuOpen ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex shrink-0 items-center gap-3" onClick={closeMenu}>
            <LagosLogo />
          </Link>

          <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {mainNav.map((item) => renderNavItem(item))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden items-center whitespace-nowrap rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#d97a5a] lg:inline-flex"
            >
              Speak To Us
            </Link>

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

        <AnimatedCollapse
          open={menuOpen}
          className="mobile-nav-panel lg:hidden"
          innerClassName="lg:hidden"
        >
          <ul key={menuOpen ? 'menu-open' : 'menu-closed'} className="mt-3 flex flex-col gap-1 border-t border-gray-100 pt-4 pb-3">
            {mainNav.map((item, index) => renderNavItem(item, true, index))}
            <li className="mobile-nav-link pt-2" style={{ animationDelay: `${mainNav.length * 40}ms` }}>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="inline-flex items-center rounded-full bg-[#e8896a] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#d97a5a]"
              >
                Speak To Us
              </Link>
            </li>
          </ul>
        </AnimatedCollapse>
      </div>
    </header>
  )
}
