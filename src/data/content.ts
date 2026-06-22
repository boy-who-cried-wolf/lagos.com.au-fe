export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about-us', label: 'About Us' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#testimonials', label: 'Testimonials' },
] as const

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
  { strong: 'Overwhelmed by Choice', text: ' - no clear way to compare them.' },
  { strong: 'Stuck with the Wrong Loan', text: ' - Paying more than you need' },
  { strong: 'Going It Alone', text: ' - without expert guidance or support.' },
] as const

export const challengeBadges = [
  { text: 'Paying Too Much', className: 'absolute -top-4 right-4 lg:-top-5 lg:right-0 rotate-[-10deg] bg-[#fc6038] text-white' },
  { text: 'Wrong Loan Structure', className: 'absolute top-[14%] xsm:top-[9%] -right-4 lg:-right-8 bg-accent text-text' },
  { text: 'Confusing Options', className: 'absolute top-[32%] xsm:top-[22%] -right-2 lg:-right-6 rotate-[10deg] bg-[#3963fb] text-white' },
] as const

export const services = [
  {
    title: 'First Home Buyer Loans',
    description: 'Expert guidance to help first-time buyers secure their first property.',
    image: '/assets/images/services/service_1.png',
    wide: false,
  },
  {
    title: 'Home Loans',
    description: 'Compare mortgage options from multiple lenders to find the best fit.',
    image: '/assets/images/services/service_2.png',
    wide: false,
  },
  {
    title: 'Refinancing',
    description: 'Review your current mortgage and potentially reduce repayments or unlock equity.',
    image: '/assets/images/services/service_3.png',
    wide: false,
  },
  {
    title: 'Investment Property Loans',
    description: 'Strategic finance solutions for building and growing your property portfolio.',
    image: '/assets/images/services/service_4.png',
    wide: true,
  },
  {
    title: 'Borrowing Power Assessment',
    description: 'Understand exactly what you can borrow and how to structure your loan for success.',
    image: '/assets/images/services/service_5.png',
    wide: true,
  },
] as const

export const approachSteps = [
  {
    number: 1,
    title: 'Tell Us Your Goals',
    description:
      'We start by understanding your financial situation and creating a clear, actionable plan tailored to your needs.',
  },
  {
    number: 2,
    title: 'Speak With An Expert',
    description:
      'A mortgage specialist will call you to discuss your options and develop a detailed roadmap for your home loan.',
  },
  {
    number: 3,
    title: 'Get Your Loan Sorted',
    description:
      'Our team brings the plan to life, focusing on precision and alignment with your vision through the entire process.',
  },
] as const

export const exclusiveServices = [
  {
    title: 'Your Power Assessment',
    subtitle: 'No Charge',
    description: 'Understand what you can afford before starting your search',
    iconBg: 'bg-[#D81E5B]',
    icon: 'calculator' as const,
  },
  {
    title: 'Free Mortgage Strategy Session',
    description: 'Explore the best loan options with an expert',
    iconBg: 'bg-accent',
    icon: 'chat' as const,
  },
  {
    title: 'Free Home Loan Review',
    description: 'Already have a mortgage? See if you could be saving',
    iconBg: 'bg-[#8fa3b8]',
    icon: 'document' as const,
  },
] as const

export const loanPills = [
  { label: 'Refinancing', bg: '#3758D3', text: '#fff' },
  { label: 'First Home Buyer', bg: '#70A2E1', text: '#fff' },
  { label: 'Self-Employed', bg: '#FFA37C', text: '#fff' },
  { label: 'Upgrading Home', bg: '#FFBAB9', text: '#fff' },
  { label: 'SMSF Lending', bg: '#76C6B3', text: '#fff' },
  { label: 'Commercial Property', bg: '#3861F9', text: '#fff' },
  { label: 'Investment Property', bg: '#23395B', text: '#fff' },
  { label: 'Construction Loans', bg: '#FFD37D', text: '#262121' },
] as const

export const testimonials = [
  {
    quote:
      'Refinanced our mortgage and now saving hundreds each month. Professional service and great communication throughout. Thank you Lagos Financial!',
    author: 'Emma C., Brisbane QLD',
    image: '/assets/images/reviews/img_1.png',
  },
  {
    quote:
      'Lagos Financial made the entire process smooth and stress-free. They found us a great rate and handled all the paperwork. Highly recommend!',
    author: 'Sarah M., Bondi',
    image: '/assets/images/reviews/img_2.png',
  },
  {
    quote:
      "As a first home buyer, I had so many questions. The team was patient, knowledgeable, and helped me understand every step. Couldn't have done it without them.",
    author: 'James Y., Melbourne VIC',
    image: '/assets/images/reviews/img_3.png',
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
    phone: '0483 969 782',
    tel: '0483969782',
    address: 'Level 1, 9-13 Bronte Road Bondi Junction 2022',
  },
  {
    name: 'Launceston Office',
    phone: '03 6146 1632',
    tel: '0361461632',
    address: '45 Cameron Street, Launceston TAS 7250',
  },
] as const
