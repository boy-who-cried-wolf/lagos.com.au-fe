export const pageHeroImages: Record<string, string> = {
  '/about-us': '/assets/images/services/service_1.png',
  '/bondi': '/assets/images/services/service_2.png',
  '/launceston': '/assets/images/services/service_3.png',
  '/buying-a-property': '/assets/images/services/service_1.png',
  '/refinance-your-home': '/assets/images/services/service_3.png',
  '/property-investment': '/assets/images/services/service_4.png',
  '/construction-loan': '/assets/images/services/service_5.png',
  '/commercial-property': '/assets/images/services/service_4.png',
  '/smsf-loans-property-investment': '/assets/images/services/service_5.png',
  '/home-loan': '/assets/images/services/service_2.png',
  '/car-loan': '/assets/images/services/service_3.png',
  '/finance': '/assets/images/services/service_1.png',
  '/partners': '/assets/images/challenges-img.png',
  '/contact': '/assets/images/challenges-img.png',
  '/frequently-asked-questions': '/assets/images/challenges-img.png',
  '/blog': '/assets/images/services/service_4.png',
  '/podcast': '/assets/images/services/service_5.png',
}

export const pageAccentLines: Record<string, string> = {
  '/about-us': 'Built on Trust.',
  '/bondi': 'Sydney Specialists.',
  '/launceston': 'Tasmania Specialists.',
  '/buying-a-property': 'Your First Home.',
  '/refinance-your-home': 'Save More.',
  '/property-investment': 'Build Wealth.',
  '/construction-loan': 'Plans to Keys.',
  '/commercial-property': 'Grow Your Portfolio.',
  '/smsf-loans-property-investment': 'Done Right.',
  '/home-loan': 'Find Your Fit.',
  '/car-loan': 'Drive Sooner.',
  '/finance': 'Every Goal.',
  '/blog': 'Learn & Grow.',
  '/podcast': 'Real Stories.',
  '/frequently-asked-questions': 'Got Questions?',
  '/contact': "Let's Talk.",
}

export const relatedLinksByPath: Record<string, { label: string; href: string }[]> = {
  '/buying-a-property': [
    { label: 'Home Loans', href: '/home-loan' },
    { label: 'Refinance Your Home', href: '/refinance-your-home' },
    { label: 'Construction Loans', href: '/construction-loan' },
  ],
  '/refinance-your-home': [
    { label: 'Home Equity Loan', href: '/home-equity-loan' },
    { label: 'Investment Property', href: '/property-investment' },
    { label: 'Home Loans', href: '/home-loan' },
  ],
  '/property-investment': [
    { label: 'Commercial Property', href: '/commercial-property' },
    { label: 'SMSF Property Investment', href: '/smsf-loans-property-investment' },
    { label: 'Refinance Your Home', href: '/refinance-your-home' },
  ],
  '/construction-loan': [
    { label: 'Buy Your First Property', href: '/buying-a-property' },
    { label: 'Home Loans', href: '/home-loan' },
    { label: 'Refinance Your Home', href: '/refinance-your-home' },
  ],
  '/commercial-property': [
    { label: 'SMSF Property Investment', href: '/smsf-loans-property-investment' },
    { label: 'Investment Property', href: '/property-investment' },
    { label: 'Business Finance', href: '/finance' },
  ],
  '/smsf-loans-property-investment': [
    { label: 'Investment Property', href: '/property-investment' },
    { label: 'Commercial Property', href: '/commercial-property' },
    { label: 'Home Loans', href: '/home-loan' },
  ],
  '/bondi': [
    { label: 'Launceston Office', href: '/launceston' },
    { label: 'All Services', href: '/finance' },
    { label: 'Contact Us', href: '/contact' },
  ],
  '/launceston': [
    { label: 'Bondi Office', href: '/bondi' },
    { label: 'All Services', href: '/finance' },
    { label: 'Contact Us', href: '/contact' },
  ],
  '/home-loan': [
    { label: 'Buy Your First Property', href: '/buying-a-property' },
    { label: 'Refinance Your Home', href: '/refinance-your-home' },
    { label: 'Investment Property', href: '/property-investment' },
  ],
  '/car-loan': [
    { label: 'Personal Finance', href: '/finance' },
    { label: 'Home Loans', href: '/home-loan' },
    { label: 'Contact Us', href: '/contact' },
  ],
  '/finance': [
    { label: 'Buy Your First Property', href: '/buying-a-property' },
    { label: 'Commercial Property', href: '/commercial-property' },
    { label: 'Investment Property', href: '/property-investment' },
  ],
  '/about-us': [
    { label: 'Our Services', href: '/finance' },
    { label: 'Bondi Office', href: '/bondi' },
    { label: 'Launceston Office', href: '/launceston' },
  ],
}

export const defaultRelatedLinks = [
  { label: 'Buy Your First Property', href: '/buying-a-property' },
  { label: 'Refinance Your Home', href: '/refinance-your-home' },
  { label: 'Book a Consultation', href: '/contact' },
]