export type NavLink = {
  label: string
  href: string
}

export type NavItem =
  | { type: 'link'; label: string; href: string }
  | { type: 'dropdown'; label: string; items: NavLink[] }

export const mainNav: NavItem[] = [
  {
    type: 'dropdown',
    label: 'Location',
    items: [
      { label: 'Bondi', href: '/bondi' },
      { label: 'Launceston', href: '/launceston' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Services',
    items: [
      { label: 'Buy Your First Property', href: '/buying-a-property' },
      { label: 'Refinance Your Home', href: '/refinance-your-home' },
      { label: 'Investment Property', href: '/property-investment' },
      { label: 'Construction Loans', href: '/construction-loan' },
      { label: 'Commercial Property', href: '/commercial-property' },
      { label: 'SMSF Property Investment', href: '/smsf-loans-property-investment' },
    ],
  },
  { type: 'link', label: 'Blog', href: '/blog' },
  { type: 'link', label: 'Podcast', href: '/podcast' },
  { type: 'link', label: "FAQ's", href: '/frequently-asked-questions' },
  { type: 'link', label: 'About', href: '/about-us' },
]

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Buy a Property', href: '/buying-a-property' },
      { label: 'Refinance Your Home', href: '/refinance-your-home' },
      { label: 'Investment Property', href: '/property-investment' },
      { label: 'Construction Loan', href: '/construction-loan' },
      { label: 'Commercial Property', href: '/commercial-property' },
      { label: 'SMSF Property Loans', href: '/smsf-loans-property-investment' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Call Us', href: 'tel:0468010679' },
      { label: 'Ecosystem', href: '/partners' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'All Services', href: '/finance' },
      { label: 'Home Loans', href: '/home-loan' },
      { label: 'Car Loans', href: '/car-loan' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
    ],
  },
] as const
