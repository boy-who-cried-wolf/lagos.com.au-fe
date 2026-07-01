export const heroCards = [
  { label: 'Buy a home', prefix: 'I need to', action: 'hailo' as const, hailoType: 'Buy a home' },
  { label: 'Pre-approval', prefix: 'I need', action: 'hailo' as const, hailoType: 'Pre-approval' },
  { label: 'Refinance', prefix: 'I need to', action: 'hailo' as const, hailoType: 'Refinance' },
  { label: 'Calculate Equity', prefix: 'I need to', action: 'equity' as const },
] as const

export const lenders = [
  { src: '/assets/images/partners/img_1.png', alt: 'Commonwealth Bank', width: 193, height: 37 },
  { src: '/assets/images/partners/img_2.png', alt: 'Westpac', width: 132, height: 42 },
  { src: '/assets/images/partners/img_3.png', alt: 'ANZ', width: 111, height: 42 },
  { src: '/assets/images/partners/img_4.png', alt: 'NAB', width: 219, height: 66 },
  { src: '/assets/images/partners/img_5.png', alt: 'Macquarie', width: 128, height: 72 },
  { src: '/assets/images/partners/img_6.png', alt: 'ING', width: 147, height: 88 },
  { src: '/assets/images/partners/img_7.png', alt: 'Suncorp', width: 255, height: 48 },
] as const

export const painPoints = [
  {
    strong: '',
    text: 'Invest in properties that will give you a positive cash flow.',
  },
  {
    strong: '',
    text: 'Feel confident knowing that you have a team of experts with you all the way.',
  },
  {
    strong: '',
    text: 'Set your family up for a brighter future by equipping yourself with the financial education you were never given.',
  },
] as const

export const challengeBadges = [
  {
    text: 'Transparency',
    className: 'absolute -top-4 right-4 lg:-top-5 lg:right-0 rotate-[-10deg] bg-[#fc6038] text-white',
  },
  {
    text: 'Results',
    className: 'absolute top-[14%] xsm:top-[9%] -right-4 lg:-right-8 bg-accent text-text',
  },
  {
    text: 'Freedom',
    className: 'absolute top-[32%] xsm:top-[22%] -right-2 lg:-right-6 rotate-[10deg] bg-[#3963fb] text-white',
  },
] as const

export const services = [
  {
    title: 'Buy Your First Property',
    description: 'First home buyer guidance, pre-approval support, and access to grants and exemptions.',
    image: '/assets/images/services/service_1.png',
    wide: false,
    href: '/buying-a-property',
  },
  {
    title: 'Refinance Your Home',
    description: 'Review your current mortgage, reduce repayments, and unlock equity with the right lender.',
    image: '/assets/images/services/service_2.png',
    wide: false,
    href: '/refinance-your-home',
  },
  {
    title: 'Investment Property',
    description: 'Residential investment loans structured for cash flow, growth, and long-term portfolio success.',
    image: '/assets/images/services/service_3.png',
    wide: false,
    href: '/property-investment',
  },
  {
    title: 'Commercial Property',
    description: 'Full doc, lease doc, and development finance for commercial investors and owner occupiers.',
    image: '/assets/images/services/service_4.png',
    wide: true,
    href: '/commercial-property',
  },
  {
    title: 'SMSF Property Investment',
    description: 'SMSF property loans for investors and owner occupiers, structured to meet compliance requirements.',
    image: '/assets/images/services/service_5.png',
    wide: true,
    href: '/smsf-loans-property-investment',
  },
] as const

export const approachSteps = [
  {
    number: 1,
    title: 'Transparency',
    description:
      'Clear advice, honest conversations, and no surprises — so you always understand your options and next steps.',
  },
  {
    number: 2,
    title: 'Results',
    description:
      'Outcome-focused loan structures designed to move you closer to your property and financial goals.',
  },
  {
    number: 3,
    title: 'Freedom',
    description:
      'Build confidence and long-term wealth with financial education and specialist support at every stage.',
  },
] as const

export const exclusiveServices = [
  {
    title: 'Complimentary Assessment',
    subtitle: 'No Charge',
    description: 'Book a complimentary assessment and understand your borrowing position before you begin.',
    iconBg: 'bg-[#D81E5B]',
    icon: 'calculator' as const,
  },
  {
    title: 'Expert Mortgage Support',
    description: 'Work with specialists who truly care and guide you from first conversation through to settlement.',
    iconBg: 'bg-accent',
    icon: 'chat' as const,
  },
  {
    title: 'Financial Education',
    description: 'Equip yourself with the practical lending knowledge you need to make confident decisions.',
    iconBg: 'bg-[#8fa3b8]',
    icon: 'document' as const,
  },
] as const

export const loanPills = [
  { label: 'Refinancing', bg: '#3758D3', text: '#fff' },
  { label: 'First Home Buyer', bg: '#70A2E1', text: '#fff' },
  { label: 'Construction Loans', bg: '#FFD37D', text: '#262121' },
  { label: 'SMSF Lending', bg: '#76C6B3', text: '#fff' },
  { label: 'Commercial Property', bg: '#3861F9', text: '#fff' },
  { label: 'Investment Property', bg: '#23395B', text: '#fff' },
  { label: 'Car Loans', bg: '#FFA37C', text: '#fff' },
  { label: 'Business Finance', bg: '#FFBAB9', text: '#fff' },
] as const

export const testimonials = [
  {
    quote:
      'Highly recommend Victor and the team at Lagos Financial. Victor was professional, clear, and incredibly supportive throughout our home purchase. Communication was excellent and the whole process was smooth.',
    author: 'Jake Spencer',
    image: '/assets/images/reviews/img_1.png',
  },
  {
    quote:
      "We've used Lagos Financial twice now, and both times the experience has been excellent. Victor and Isoa made securing a loan for our block of land easy and stress-free with clear, practical advice.",
    author: 'Kellie Gardner',
    image: '/assets/images/reviews/img_2.png',
  },
  {
    quote:
      'Victor was incredibly thorough and provided clear explanations about loan structures. The video walkthrough was fantastic and helped us understand exactly how everything worked as first-time investment buyers.',
    author: 'Vicky Sun',
    image: '/assets/images/reviews/img_3.png',
  },
  {
    quote:
      'Victor and Lagos Financial have worked with us for a number of years. We have gained investment properties and made significant savings on our own home. Highly recommended.',
    author: 'Pete L',
    image: '/assets/images/reviews/img_1.png',
  },
] as const

export const loanOptions = [
  'Refinancing',
  'First Home Buyer',
  'Self-Employed',
  'Upgrading Home',
  'SMSF Lending',
  'Commercial Property',
  'Investment Property',
  'Construction Loans',
] as const

export const offices = [
  {
    name: 'Sydney Office',
    phone: '0468 010 679',
    tel: '0468010679',
    address: 'Level 1, 9-13 Bronte Road Bondi Junction 2022',
  },
  {
    name: 'Launceston Office',
    phone: '0468 010 679',
    tel: '0468010679',
    address: '45 Cameron Street, Launceston TAS 7250',
  },
] as const

export const podcastContent = {
  eyebrow: 'Podcast',
  title: 'Debt to Financial Freedom Podcast',
  description:
    "Welcome to the Debt Financial Freedom Podcast. I'm your host Victor Lagos and the founder of Lagos Financial.",
  paragraphs: [
    "I've been in the finance and lending industry for 17 years and I've personally made financial mistakes and learned from them.",
    "I've started this Podcast to share stories and lessons on my own journey, and to share insight that may help others on their journey, and I interviewed people that I connected with, that share my values and mission to help other create financial freedom.",
    'My goal in this podcast is to share raw, honest, transparent, and helpful stories that you can relate to, and inspires you to take control of your finances.',
    'And only have debt that brings you closer to financial freedom.',
  ],
} as const
