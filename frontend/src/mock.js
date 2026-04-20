// Mock data for Bhavitha Naramamidi - Product Designer Portfolio

export const RESUME_URL =
  'https://customer-assets.emergentagent.com/job_dev-workspace-199/artifacts/xauc6eqk_Naramamidi_Bhavitha_UI_UX_Designer_Resume.pdf';

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '#about' },
  { label: 'Projects', to: '#projects' },
  { label: 'Services', to: '#services' },
  { label: 'Process', to: '#process' },
  { label: 'Contact', to: '#contact' },
];

export const HERO = {
  greeting: 'Hey,',
  wave: '👋',
  role: "I'm a Product Designer",
  name: 'Bhavitha',
  fullName: 'Bhavitha Naramamidi',
  description:
    'I craft intuitive, accessible, and user-centered digital experiences — blending thoughtful UX research with refined UI craft to solve real-world problems that feel effortless to use.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
};

export const CONTACT = {
  email: 'nbhavitha04@gmail.com',
  phone: '+91 91215 44119',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bhavitha-naramamidi-041979297?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { label: 'Behance', url: 'https://www.behance.net/bhavithnaramam' },
    { label: 'Dribbble', url: 'https://dribbble.com/' },
    { label: 'Figma', url: 'https://www.figma.com/' },
  ],
};

export const ABOUT = {
  portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80',
  bio: "I'm passionate about designing products that are both beautiful and genuinely useful. As a UI/UX designer — promoted to Head of Design at ADM Education & Society Welfare NGO within two months — I thrive on user research, wireframing, and turning complex problems into simple, delightful experiences. Always exploring new patterns, iterating with feedback, and learning something new.",
};

export const SKILLS = [
  {
    category: 'UX Design',
    items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Information Architecture', 'User Journeys'],
  },
  {
    category: 'UI Design',
    items: ['Visual Design', 'Typography', 'Layout Design', 'Responsive Design', 'Design Systems', 'Interaction Design'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'FigJam', 'Adobe XD', 'Canva', 'Notion', 'Miro', 'Framer'],
  },
  {
    category: 'Core Strengths',
    items: ['Problem Solving', 'Communication', 'Collaboration', 'Leadership', 'Empathy', 'Critical Thinking', 'Attention to Detail', 'Storytelling', 'Adaptability', 'Time Management'],
  },
];

export const STATS = [
  { value: '1+', label: 'Years of Experience' },
  { value: '12+', label: 'Projects Shipped' },
  { value: '2', label: 'Months to Head of Design' },
];

const DEFAULT_DETAIL = {
  client: 'Private Client',
  industry: 'Product / SaaS',
  timeline: '3 Weeks',
  livePreview: 'https://www.behance.net/bhavithnaramam',
  overview: [
    'A user-centered design project focused on solving real usability challenges through careful research, iteration, and refined visual craft.',
    'Every decision was informed by user interviews and testing — from information architecture down to the smallest micro-interaction.',
  ],
  role: [
    'User Research & Interviews',
    'Information Architecture',
    'Wireframing & User Flows',
    'Hi-fidelity UI Design',
    'Prototyping & Usability Testing',
    'Design System Setup',
  ],
  stack: [
    { label: 'Design', value: 'Figma, FigJam' },
    { label: 'Prototyping', value: 'Figma, Framer' },
    { label: 'Research', value: 'Notion, Miro, Google Forms' },
    { label: 'Handoff', value: 'Figma Dev Mode' },
    { label: 'Visuals', value: 'Illustrator, Canva' },
  ],
  features: [
    'Responsive layouts across mobile and desktop',
    'Accessible colour palettes (WCAG AA)',
    'Reusable component library',
    'Clear visual hierarchy and grid system',
    'Micro-interactions & motion principles',
    'User-tested onboarding flow',
    'Scalable design tokens',
    'Dev-ready Figma handoff',
  ],
  challenges: [
    {
      challenge: 'Balancing clarity with a rich amount of content',
      solution:
        'Introduced a layered IA with progressive disclosure so users could scan quickly and dive deeper only when needed.',
    },
    {
      challenge: 'Building trust in a new product category',
      solution:
        'Added social proof, transparency moments, and a friendly tone-of-voice across empty states and CTAs.',
    },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80',
    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80',
  ],
  takeaway:
    "This project reaffirmed that great design is a conversation — between the user's needs, the business goals, and the craft. Small details, tested early, compound into experiences people love.",
};

export const PROJECTS = [
  {
    slug: 'edtech-redesign',
    title: 'EdTech Programs Redesign',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
    description:
      'Redesigned an educational programs webpage to improve visual hierarchy, clarity, and conversion flow for prospective learners.',
    tags: ['Web', 'UX Audit', 'Figma'],
    detail: { ...DEFAULT_DETAIL, client: 'ADM Education NGO', industry: 'EdTech', timeline: '4 Weeks' },
  },
  {
    slug: 'dwellr',
    title: 'Dwellr — Roommate Finder',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80',
    description:
      'A roommate finder mobile app solving trust & compatibility for shared living — from research, personas, and journeys to hi-fi prototypes.',
    tags: ['Mobile App', 'Case Study', 'Figma'],
    detail: { ...DEFAULT_DETAIL, client: 'Self-initiated', industry: 'Social / Housing', timeline: '6 Weeks' },
  },
  {
    slug: 'finwise',
    title: 'FinWise — Budget Tracker',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80',
    description:
      'A calm personal finance app that turns daily spending into delightful visual insights — built around gentle nudges, not guilt.',
    tags: ['Mobile App', 'Fintech', 'Prototyping'],
    detail: { ...DEFAULT_DETAIL, client: 'Concept', industry: 'Fintech', timeline: '3 Weeks' },
  },
  {
    slug: 'bloomshop',
    title: 'BloomShop — E-commerce',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80',
    description:
      'A refined storefront for a boutique flower brand — balancing editorial typography with a frictionless checkout experience.',
    tags: ['Web', 'E-commerce', 'Design System'],
    detail: { ...DEFAULT_DETAIL, client: 'BloomShop', industry: 'E-commerce', timeline: '5 Weeks' },
  },
  {
    slug: 'pulse-health',
    title: 'Pulse — Health Dashboard',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80',
    description:
      'A clinician-facing dashboard that surfaces the right data at the right time — with accessible colour and clear priority.',
    tags: ['SaaS', 'Dashboard', 'Accessibility'],
    detail: { ...DEFAULT_DETAIL, client: 'Pulse Health', industry: 'Healthcare', timeline: '4 Weeks' },
  },
  {
    slug: 'lumenfit',
    title: 'LumenFit — Workout App',
    image: 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=1600&q=80',
    description:
      'An approachable workout companion for beginners — warm visual language, bite-sized sessions, and gentle streaks.',
    tags: ['Mobile App', 'Branding', 'Motion'],
    detail: { ...DEFAULT_DETAIL, client: 'LumenFit', industry: 'Health & Wellness', timeline: '4 Weeks' },
  },
];

export const SERVICES = [
  {
    index: '01',
    title: 'UX Research & Strategy',
    description:
      'Interviews, surveys, and competitive audits that turn fuzzy problems into clear product opportunities.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80',
  },
  {
    index: '02',
    title: 'Wireframing & Prototyping',
    description:
      'From low-fi sketches to interactive Figma prototypes — testing ideas fast before a pixel is polished.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000&q=80',
  },
  {
    index: '03',
    title: 'Visual & UI Design',
    description:
      'Thoughtful typography, colour, and layout — delivering interfaces that feel refined, consistent, and on-brand.',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1000&q=80',
  },
  {
    index: '04',
    title: 'Design Systems',
    description:
      'Scalable component libraries with tokens and clear documentation — so teams ship faster without losing consistency.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1000&q=80',
  },
];

export const PROCESS = [
  {
    index: '01',
    title: 'Discover & Research',
    description:
      'Stakeholder chats, user interviews, and desk research to deeply understand the real problem before touching pixels.',
  },
  {
    index: '02',
    title: 'Design & Prototype',
    description:
      'From rough wireframes to polished hi-fi prototypes — iterating quickly with the team and pressure-testing the flows.',
  },
  {
    index: '03',
    title: 'Test & Iterate',
    description:
      'Usability tests, feedback loops, and handoff with clear documentation — then measuring impact and refining further.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Bhavitha has an incredible eye for clarity. She took our dense programs page and turned it into something calm, scannable, and genuinely delightful to use. Promoted her to Head of Design in two months — completely earned.',
    name: 'Program Director',
    title: 'ADM Education & Society Welfare NGO',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=240&q=80',
  },
  {
    quote:
      'What stood out was how much she cared about the actual humans using our product. Her research insights reshaped our onboarding entirely — and it showed up in the numbers.',
    name: 'Sophie Lin',
    title: 'Head of Product, Drift & Bloom',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&q=80',
  },
  {
    quote:
      'Bhavitha blends sharp visual craft with a really structured design process. Handoff was effortless — tokens, states, documentation — all thoughtfully ready for engineering.',
    name: 'Ronald Richards',
    title: 'Engineering Lead, PulseTech',
    avatar: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=240&q=80',
  },
];

export const CLIENTS = [
  'ADM NGO', 'Dwellr', 'FinWise', 'BloomShop', 'Pulse', 'LumenFit', 'Orbit', 'Lumen',
];

export const BLOGS = [
  {
    slug: 'wireframing-that-works',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=80',
    category: 'UX',
    date: 'Feb 14, 2026',
    title: 'Wireframing That Actually Helps You Ship Faster',
  },
  {
    slug: 'design-systems-101',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80',
    category: 'Design Systems',
    date: 'Jan 28, 2026',
    title: 'Design Systems 101: Tokens, Components & Docs',
  },
  {
    slug: 'research-for-solo-designers',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80',
    category: 'Research',
    date: 'Jan 10, 2026',
    title: 'User Research When You\u2019re a One-Person Design Team',
  },
];
