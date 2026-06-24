export type PageSection = {
  title: string
  content: string
}

export type PageMeta = {
  title: string
  description: string
  path: string
  eyebrow?: string
  heading: string
  subheading?: string
  sections?: PageSection[]
  ctaLabel?: string
}

export const pages: Record<string, PageMeta> = {
  '/about-us': {
    path: '/about-us',
    title: 'About Lagos Financial | Victor Lagos, Mortgage Broker',
    description:
      'Meet Victor Lagos and the Lagos Financial team. Mortgage brokers helping Australians achieve financial freedom through expert lending advice.',
    eyebrow: 'About Us',
    heading: 'Empowering You to Achieve Financial Freedom',
    subheading:
      'Lagos Financial is a mortgage broking firm built on transparency, results, and freedom — helping clients across Bondi, Sydney and Launceston, Tasmania.',
    sections: [
      {
        title: 'Who We Are?',
        content:
          'Founded by Victor Lagos, Lagos Financial brings 17+ years of finance and lending experience. We work with 60+ lenders to find loan structures that align with your goals — whether you are buying your first home, refinancing, investing, or building commercial wealth.',
      },
      {
        title: 'Your Financial Success, Our Purpose',
        content:
          'We believe financial education and honest advice are the foundation of long-term wealth. Our team provides personalised support from first conversation through to settlement and beyond, with offices in Bondi Junction and Launceston.',
      },
    ],
  },
  '/bondi': {
    path: '/bondi',
    title: 'Bondi Junction - Lagos Financial',
    description:
      'Mortgage broking and property investment finance specialists in Bondi Junction, Sydney. Personal, residential, commercial, SMSF and business finance.',
    eyebrow: 'Bondi Junction',
    heading: 'Bondi Specialists in Mortgage Broking & Property Investment Finance',
    subheading:
      'Serving Bondi and surrounding Sydney suburbs with personalised mortgage advice and access to 60+ lenders.',
    sections: [
      {
        title: 'Personal Finance Broker',
        content:
          'Home loans, car loans, debt consolidation and refinancing tailored to your lifestyle and borrowing capacity.',
      },
      {
        title: 'Residential Finance Broker',
        content:
          'First home buyers, upgraders, investment properties, equity release and construction loans with clear guidance at every step.',
      },
      {
        title: 'Commercial Finance Broker',
        content:
          'Full doc and lease doc commercial property loans, development finance and business-purpose lending.',
      },
      {
        title: 'SMSF Loan Broker',
        content:
          'SMSF property loans for investors and owner occupiers, structured to meet superannuation compliance requirements.',
      },
      {
        title: 'Business Finance Broker',
        content:
          'Term loans, working capital, asset finance and equipment finance for growing Australian businesses.',
      },
    ],
  },
  '/launceston': {
    path: '/launceston',
    title: 'Launceston - Lagos Financial',
    description:
      'Mortgage brokers in Launceston, Tasmania. Home loans, refinancing, investment property and commercial finance with local expertise.',
    eyebrow: 'Launceston',
    heading: 'Launceston Mortgage Brokers You Can Trust',
    subheading:
      'Local lending specialists at 45 Cameron Street, helping Tasmanian families and investors secure the right finance.',
    sections: [
      {
        title: 'Personal & Home Loans',
        content:
          'From first home purchases to refinancing and debt consolidation, we compare products across 60+ lenders to find competitive rates and structures.',
      },
      {
        title: 'Investment & Commercial Finance',
        content:
          'Residential investment loans, SMSF lending, commercial property finance and business asset loans for clients building long-term wealth.',
      },
      {
        title: 'Visit Our Launceston Office',
        content:
          '45 Cameron Street, Launceston TAS 7250. Book a complimentary assessment to discuss your goals with a broker who understands the local market.',
      },
    ],
  },
  '/buying-a-property': {
    path: '/buying-a-property',
    title: 'First time home buyer guide Australia - Lagos Financial',
    description:
      'Step-by-step first home buyer guide. Eligibility, deposits, loan options, pre-approval and grants explained by Lagos Financial.',
    eyebrow: 'Buy Your First Property',
    heading: 'First Home Buyer Guide: Steps to Secure Your Dream Home',
    sections: [
      {
        title: 'Step 1: Eligibility Check',
        content:
          'Understand your borrowing position, income requirements and lender criteria before you start inspecting properties.',
      },
      {
        title: 'Step 2: Saving for a Deposit',
        content:
          'Learn how much deposit you need, LMI considerations, and strategies to reach your savings target faster.',
      },
      {
        title: 'Step 3: Understanding Home Loan Options',
        content:
          'Compare fixed vs variable rates, offset accounts, guarantor loans and first home buyer specific products.',
      },
      {
        title: 'Step 4: Pre-Approval Process',
        content:
          'Get pre-approved so you can bid with confidence. We handle lender paperwork and keep you informed throughout.',
      },
    ],
  },
  '/refinance-your-home': {
    path: '/refinance-your-home',
    title: 'Refinance Your Home - Lagos Financial',
    description:
      'Refinance your home loan to lower repayments, access equity or improve loan structure. Expert broker advice from Lagos Financial.',
    eyebrow: 'Refinance',
    heading: 'Refinance Your Home Loan With Confidence',
    subheading:
      'Review your current mortgage and discover whether refinancing could save you money or unlock equity for your next goal.',
    sections: [
      {
        title: 'Why Refinance?',
        content:
          'Lower interest rates, consolidate debt, switch lenders, access cash-out equity or move from interest-only to principal and interest.',
      },
      {
        title: 'Our Refinance Process',
        content:
          'We compare your existing loan against 60+ lenders, model savings scenarios, and manage the application from start to settlement.',
      },
    ],
  },
  '/property-investment': {
    path: '/property-investment',
    title: 'Investment Property Loans - Lagos Financial',
    description:
      'Residential investment property finance, negative gearing strategies, rental yields and portfolio growth with Lagos Financial.',
    eyebrow: 'Investment Property',
    heading: 'Build Wealth Through Residential Property Investment',
    subheading:
      'Strategic loan structures for investors seeking positive cash flow and long-term capital growth.',
    sections: [
      {
        title: 'Investment Loan Options',
        content:
          'Interest-only vs principal and interest, cross-collateralisation vs stand-alone security, and lender policies for portfolio investors.',
      },
      {
        title: 'Cash Flow & Tax Strategy',
        content:
          'Understand rental yields, negative gearing, depreciation and how loan structure affects your after-tax position.',
      },
    ],
  },
  '/construction-loan': {
    path: '/construction-loan',
    title: 'Construction Loans - Lagos Financial',
    description:
      'Construction and knockdown-rebuild finance in Australia. Progress payments, builder alignment and loan comparison guides.',
    eyebrow: 'Construction Loans',
    heading: 'Finance Your Build From Plans to Keys',
    sections: [
      {
        title: 'How Construction Loans Work',
        content:
          'Progress draw-downs aligned to build stages, valuation requirements and converting to a standard home loan at completion.',
      },
      {
        title: 'Working With Your Builder',
        content:
          'We help align lender requirements with your building contract so finance approval stays on track with your timeline.',
      },
    ],
  },
  '/commercial-property': {
    path: '/commercial-property',
    title: 'Commercial Property Loans - Lagos Financial',
    description:
      'Full doc and lease doc commercial property loans, development finance and business-purpose lending across Australia.',
    eyebrow: 'Commercial Property',
    heading: 'Commercial Property Finance for Investors & Owner Occupiers',
    sections: [
      {
        title: 'Full Doc Commercial Loans',
        content:
          'Traditional income-verified lending for commercial acquisitions, refinancing and portfolio expansion.',
      },
      {
        title: 'Lease Doc & Development Finance',
        content:
          'Lease doc loans for investment acquisitions and development finance for land banking and subdivision projects.',
      },
    ],
  },
  '/smsf-loans-property-investment': {
    path: '/smsf-loans-property-investment',
    title: 'SMSF Property Investment Loans - Lagos Financial',
    description:
      'SMSF property loans for investors and owner occupiers. Compliance, LVR rules and loan preparation guidance.',
    eyebrow: 'SMSF Property Investment',
    heading: 'SMSF Property Loans Done Right',
    sections: [
      {
        title: 'SMSF Borrowing Rules',
        content:
          'Understand limited recourse borrowing arrangements, eligible properties and compliance requirements before you apply.',
      },
      {
        title: 'Loan Preparation & Approval',
        content:
          'We structure SMSF loans with lenders experienced in super fund lending and guide your accountant and solicitor through the process.',
      },
    ],
  },
  '/home-loan': {
    path: '/home-loan',
    title: 'Home Loans - Lagos Financial',
    description: 'Compare home loan options from 60+ lenders. Fixed, variable, split rate and specialist home loan products.',
    eyebrow: 'Home Loans',
    heading: 'Find the Right Home Loan for Your Situation',
    sections: [
      {
        title: 'Owner Occupier Loans',
        content: 'Competitive rates and features for buyers, refinancers and upgraders across Australia.',
      },
      {
        title: 'Specialist Home Loans',
        content:
          'Self-employed, bad credit, guarantor, bridging, interest-only and professional LMI waiver options.',
      },
    ],
  },
  '/car-loan': {
    path: '/car-loan',
    title: 'Car Loans - Lagos Financial',
    description: 'Personal and business car finance with competitive rates. Chattel mortgages and consumer car loans.',
    eyebrow: 'Car Loans',
    heading: 'Car Finance Made Simple',
    sections: [
      {
        title: 'Personal Car Loans',
        content: 'Straightforward vehicle finance for private buyers with flexible terms and fast approvals.',
      },
      {
        title: 'Business Vehicle Finance',
        content: 'Chattel mortgages and commercial hire purchase for company and fleet vehicles.',
      },
    ],
  },
  '/finance': {
    path: '/finance',
    title: 'All Finance Services - Lagos Financial',
    description: 'Explore all mortgage, commercial, SMSF and business finance services offered by Lagos Financial.',
    eyebrow: 'All Services',
    heading: 'Comprehensive Finance Solutions',
    subheading: 'Whatever your property or business goal, we connect you with the right lender and loan structure.',
    sections: [
      {
        title: 'Residential',
        content: 'Home loans, first home buyers, refinancing, investment property, construction and equity release.',
      },
      {
        title: 'Commercial & Business',
        content: 'Commercial property, development finance, business loans, asset and equipment finance.',
      },
    ],
  },
  '/partners': {
    path: '/partners',
    title: 'Ecosystem & Partners - Lagos Financial',
    description: 'The Lagos Financial ecosystem of partners helping clients achieve financial freedom.',
    eyebrow: 'Ecosystem',
    heading: 'Our Partner Ecosystem',
    subheading:
      'We collaborate with accountants, solicitors, buyers agents and property professionals to deliver end-to-end support.',
    sections: [
      {
        title: 'Referral Partners',
        content:
          'Trusted professionals who share our values of transparency and client-first advice across property and finance.',
      },
    ],
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy - Lagos Financial',
    description: 'Privacy policy for Lagos Financial Pty Ltd.',
    eyebrow: 'Legal',
    heading: 'Privacy Policy',
    sections: [
      {
        title: 'Your Privacy',
        content:
          'Lagos Financial Pty Ltd (ACL 546774) collects personal information to provide mortgage broking services. We handle your data in accordance with the Privacy Act 1988 and do not sell your information to third parties.',
      },
    ],
  },
  '/home-equity-loan': {
    path: '/home-equity-loan',
    title: 'Home Equity Loan - Lagos Financial',
    description: 'Access equity in your home for renovations, investment, or debt consolidation with expert broker guidance.',
    eyebrow: 'Equity Release',
    heading: 'Unlock Your Home Equity',
    sections: [
      {
        title: 'How Equity Release Works',
        content:
          'Borrow against the value you have built in your property while keeping your existing home loan, subject to lender policy and LVR limits.',
      },
    ],
  },
  '/terms-of-use': {
    path: '/terms-of-use',
    title: 'Terms of Use - Lagos Financial',
    description: 'Terms of use for the Lagos Financial website.',
    eyebrow: 'Legal',
    heading: 'Terms of Use',
    sections: [
      {
        title: 'Website Use',
        content:
          'Information on this website is general in nature and does not constitute personal financial advice. Please contact us for advice tailored to your circumstances.',
      },
    ],
  },
}

export const faqItems = [
  {
    question: 'What does a mortgage broker do?',
    answer:
      'A mortgage broker compares loan products from multiple lenders on your behalf, handles paperwork, and guides you from application through to settlement — at no direct cost to you in most cases, as brokers are paid by the lender.',
  },
  {
    question: 'How much does it cost to use Lagos Financial?',
    answer:
      'For most home and investment loans, our service is free to you. We receive a commission from the lender when your loan settles. We will always disclose any fees upfront if they apply to your situation.',
  },
  {
    question: 'Which areas do you service?',
    answer:
      'We help clients across Australia with offices in Bondi Junction, Sydney and Launceston, Tasmania. Meetings are available in person, by phone, or video call.',
  },
  {
    question: 'How long does loan approval take?',
    answer:
      'Pre-approval typically takes a few business days. Full approval depends on the lender, property type, and complexity — we keep you updated at every stage.',
  },
  {
    question: 'Can you help with commercial or SMSF loans?',
    answer:
      'Yes. We specialise in residential, commercial, construction, and SMSF property finance with access to lenders experienced in each area.',
  },
] as const
