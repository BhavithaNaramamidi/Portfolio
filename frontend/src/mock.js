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
  { value: '4+', label: 'Projects Shipped' },
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
    slug: 'shopsmart',
    title: 'ShopSmart — E-Commerce UX',
    image: 'https://customer-assets.emergentagent.com/job_dev-workspace-199/artifacts/qr0l9ter_hero%20section.png',
    description:
      'Redesigning a full e-commerce app with a focus on intent-driven search — moving from keyword matching to understanding what users actually mean.',
    tags: ['UX Case Study', 'E-commerce', 'Mobile UI', 'Search Systems'],
    detail: {
      ...DEFAULT_DETAIL,
      client: 'Portfolio Project',
      industry: 'E-Commerce',
      timeline: '21 Screens · 5 Flows',
      livePreview: 'https://www.behance.net/gallery/247859085/ShopSmart-E-Commerce-UX-Case-Study',
      overview: [
        'Users search the way they think \u2014 naturally, conversationally, sometimes vaguely. But traditional keyword search demands precision. The result is a system that constantly fails the very people it is supposed to help.',
        'ShopSmart reimagines e-commerce search around intent, not keywords. The redesign spans the full journey \u2014 onboarding, discovery, search, checkout, and post-purchase \u2014 across 21 screens and 5 user flows.',
      ],
      role: [
        'UX Research & Competitive Analysis',
        'User Segmentation (Pro / Mid-tier / Rookie)',
        'Intent-Driven Search System Design',
        'Interaction Design — Chip System',
        'End-to-End Mobile UI (iOS & Android)',
        'Post-Purchase & Review Flows',
      ],
      stack: [
        { label: 'Design', value: 'Figma' },
        { label: 'Ideation', value: 'Brainstorm, Sketching' },
        { label: 'Role', value: 'UX Designer (solo)' },
        { label: 'Platform', value: 'iOS & Android' },
        { label: 'Scope', value: '21 screens · 5 flows' },
        { label: 'Focus', value: 'Search UX · Intent mapping' },
      ],
      beforeMetrics: [
        { value: '68%', label: 'users had search problems' },
        { value: '2.1x', label: 'more tries to find products' },
        { value: '41%', label: 'searches returned no results' },
        { value: '$2.4M', label: 'revenue lost to bad search' },
      ],
      afterMetrics: [
        { value: '54%', label: 'improvement in search success' },
        { value: '−44%', label: 'fewer repeat searches' },
        { value: '+91%', label: 'task completion rate' },
        { value: '$1.8M', label: 'simulated revenue recovered' },
      ],
      flows: [
        { index: '01', name: 'Onboarding', screens: '2 screens', note: 'Zero-friction entry — contextual auth only when needed' },
        { index: '02', name: 'Home & Discovery', screens: '5 screens', note: 'Recency-weighted personalisation for returning users' },
        { index: '03', name: 'Search experience', screens: 'Highlight', note: 'Intent-driven chip system — the core redesign' },
        { index: '04', name: 'Product & Cart', screens: '7 steps', note: 'Two paths: Add to cart and Buy Now fast lane' },
        { index: '05', name: 'Post Purchase', screens: 'Loyalty flow', note: 'Live tracking + progressive reviews' },
      ],
      features: [
        'Intent-driven search — chips extracted from natural language',
        'Contextual authentication — login only at checkout/wishlist',
        'Recency-weighted "You might like" (last 3\u20135 searches)',
        'Confirmed + Suggested chip rows for transparent search',
        'Silent autocorrect with visible correction message',
        'Voice input that feeds the same chip pipeline',
        'No-results flow with related products — never a dead end',
        'Fast-lane Buy Now path alongside cart flow',
        'Live order timeline with exception states',
        'Progressive reviews — stars + chips + optional text',
      ],
      challenges: [
        {
          challenge: 'Keyword search couldn\u2019t handle "something for my mom\u2019s birthday under 500"',
          solution:
            'Built an intent interface with a chip system \u2014 confirmed chips reflect the user\u2019s own words, suggested chips offer system recommendations. Meaning became structured without removing natural expression.',
        },
        {
          challenge: 'Three very different user segments were failing in three very different ways',
          solution:
            'Designed for the rookie by default (zero friction, clear hints), but preserved power for the pro user (voice input, deep filters, chip removal). Mid-tier users got transparent fallbacks so they never gave up.',
        },
      ],
      gallery: [
        'https://customer-assets.emergentagent.com/job_dev-workspace-199/artifacts/sgez97sc_5th.png',
        'https://customer-assets.emergentagent.com/job_dev-workspace-199/artifacts/wecip74w_image.png',
      ],
      takeaway:
        'The system matched characters. Users communicated meaning. Closing that gap \u2014 with chips, progressive disclosure, and honest empty states \u2014 turned search from a barrier into a conversation.',
    },
  },
  {
    slug: 'dwellr',
    title: 'Dwellr — Roommate Finder App',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/85c532204632283.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png',
    description:
      'A roommate finder mobile app solving trust and compatibility challenges in shared living — a full UX journey from research and personas to hi-fi prototypes.',
    tags: ['Mobile App', 'UX Case Study', 'Figma'],
    detail: {
      ...DEFAULT_DETAIL,
      client: 'Self-initiated',
      industry: 'Social / Housing',
      timeline: '6 Weeks',
      livePreview: 'https://www.behance.net/gallery/204632283/dwellr-A-Roommate-Finder-App-UX-Case-Study',
      overview: [
        'Dwellr is a mobile-first roommate finder designed around the real pain points of shared living: trust, compatibility, and information overload in existing apps.',
        'The design prioritises an honest onboarding flow, compatibility-focused matching, and calm, content-first screens that help users make decisions with confidence.',
      ],
      role: [
        'User Research & Interviews',
        'Personas & Journey Mapping',
        'Information Architecture',
        'Wireframes & User Flows',
        'High-Fidelity UI in Figma',
        'Interactive Prototyping',
      ],
      stack: [
        { label: 'Design', value: 'Figma, FigJam' },
        { label: 'Research', value: 'Surveys, 1:1 Interviews' },
        { label: 'Role', value: 'UX Designer (solo)' },
        { label: 'Platform', value: 'iOS & Android' },
        { label: 'Scope', value: '18 screens · 4 flows' },
      ],
      beforeMetrics: [
        { value: '3 of 4', label: 'users distrusted existing apps' },
        { value: '62%', label: 'gave up before first message' },
        { value: '4.2', label: 'apps tried on average' },
        { value: '18min', label: 'avg. onboarding time elsewhere' },
      ],
      afterMetrics: [
        { value: '92%', label: 'finished guided onboarding' },
        { value: '2.3x', label: 'more profile views' },
        { value: '+38%', label: 'message-to-match rate' },
        { value: '< 4min', label: 'onboarding completion' },
      ],
      flows: [
        { index: '01', name: 'Guided Onboarding', screens: '4 screens', note: 'Lifestyle & budget questions feed matching' },
        { index: '02', name: 'Match & Discovery', screens: '5 screens', note: 'Compatibility-based profile feed' },
        { index: '03', name: 'Profile & Trust', screens: '4 screens', note: 'Verified badges + transparent info' },
        { index: '04', name: 'Chat & Safety', screens: '5 screens', note: 'Safety prompts baked into first messages' },
      ],
      features: [
        'Guided onboarding with lifestyle preferences',
        'Compatibility-based profile matching',
        'Verified profile badges for trust',
        'In-app chat with safety prompts',
        'Filter by budget, location & habits',
        'Save & compare shortlisted matches',
        'Clear privacy controls',
        'Gentle empty and loading states',
      ],
      gallery: [
        'https://mir-s3-cdn-cf.behance.net/projects/404/85c532204632283.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80',
      ],
      takeaway:
        'Trust is a design problem. Small cues \u2014 verified badges, honest empty states, calmer colour \u2014 moved Dwellr from "another listings app" to something people felt safe making big decisions on.',
    },
  },
  {
    slug: 'phn-programs',
    title: 'PHN Technology — Programs Site',
    image: 'https://image.thum.io/get/width/1600/https://phntechnology.com/programs',
    description:
      'Designed the programs landing experience for PHN Technology — positioning hands-on workshops, expert masterclasses and internships with clean visual hierarchy.',
    tags: ['Website', 'EdTech', 'Landing Page'],
    detail: {
      ...DEFAULT_DETAIL,
      client: 'PHN Technology',
      industry: 'EdTech',
      timeline: '5 Weeks',
      livePreview: 'https://phntechnology.com/programs',
      overview: [
        'PHN Technology partners with IITs and NITs to bring future-ready skills to schools and colleges across India. The Programs page needed to clearly showcase three flagship tracks \u2014 Hands-On Workshops, Expert Masterclasses, and Internship Programs \u2014 to a diverse audience of students, parents and institutions.',
        'The design direction centred on clarity, credibility and momentum: bold stats, scannable program cards, an advisory board section, and a verifiable-certificate flow that builds instant trust.',
      ],
      role: [
        'Competitive Benchmarking',
        'Information Architecture',
        'Landing Page UX & UI',
        'Program Card System',
        'Advisory Board Module',
        'Responsive Design & Handoff',
      ],
      stack: [
        { label: 'Design', value: 'Figma' },
        { label: 'Handoff', value: 'Figma Dev Mode' },
        { label: 'Role', value: 'UI/UX Designer' },
        { label: 'Platform', value: 'Web (Desktop + Mobile)' },
        { label: 'Scope', value: 'Programs landing + sub-modules' },
      ],
      highlights: [
        { value: 'IIT & NIT', label: 'partnership-grade credibility' },
        { value: '3 Tracks', label: 'Workshops · Masterclasses · Internships' },
        { value: 'Verifiable', label: 'certificate authentication flow' },
      ],
      flows: [
        { index: '01', name: 'Hero & Impact', screens: 'Above the fold', note: 'Clear value prop + quantified reach' },
        { index: '02', name: 'Programs Showcase', screens: '3 tracks', note: 'Workshops, Masterclasses, Internships' },
        { index: '03', name: 'Trust Layer', screens: 'Why PHN', note: 'CoE Lab, Certification, Career Guidance' },
        { index: '04', name: 'Advisory Board', screens: 'Carousel', note: 'IIT / NIT directors featured' },
        { index: '05', name: 'Verify Certificate', screens: 'CTA flow', note: 'Transparent authenticity check' },
      ],
      features: [
        'Hero with quantified impact (students, schools, colleges)',
        'Three-track programs showcase',
        '"Why Choose Us" value pillars',
        'CoE Lab & Certification highlight',
        'Verify-your-certificate flow',
        'Advisory Board carousel with IIT/NIT directors',
        'Embedded YouTube story section',
        'Fully responsive across devices',
      ],
      gallery: [
        'https://image.thum.io/get/width/1600/https://phntechnology.com/programs',
        'https://image.thum.io/get/width/1600/https://phntechnology.com/',
        'https://image.thum.io/get/width/1600/https://phntechnology.com/advisoryboard',
        'https://image.thum.io/get/width/1600/https://phntechnology.com/programs/certificate',
      ],
      takeaway:
        'EdTech lives or dies on credibility. Anchoring the page with real numbers, a visible advisory board, and verifiable certificates turned a programs list into a trust-building experience.',
    },
  },
  {
    slug: 'phn-skillhub-lms',
    title: 'PHN SkillHub — LMS Platform',
    image: 'https://image.thum.io/get/width/1600/https://lms.phntechnology.com/',
    description:
      'End-to-end product design for PHN SkillHub — a learner-first LMS that helps working professionals build job-ready skills through expert-led, self-paced courses.',
    tags: ['Web App', 'LMS', 'Product Design'],
    detail: {
      ...DEFAULT_DETAIL,
      client: 'PHN Technology',
      industry: 'EdTech / LMS',
      timeline: '8 Weeks',
      livePreview: 'https://lms.phntechnology.com/',
      overview: [
        'PHN SkillHub is a modern LMS for learners looking to pivot or level up their careers. The design had to balance motivation and structure \u2014 so someone juggling a full-time job can still progress meaningfully every week.',
        'From the hero to course cards, search, and mastery paths, every screen was designed around the learner\u2019s decision moments: "What should I learn?", "Can I commit to this?", and "Am I making real progress?"',
      ],
      role: [
        'Product Strategy & UX Flows',
        'Course Discovery & Search UX',
        'Course Card & Detail Design',
        'Learner Dashboard Concepts',
        'Visual System & Components',
        'Figma Dev Hand-off',
      ],
      stack: [
        { label: 'Design', value: 'Figma' },
        { label: 'Components', value: 'Design system library' },
        { label: 'Role', value: 'Product Designer' },
        { label: 'Platform', value: 'Web (Responsive)' },
        { label: 'Scope', value: 'Discovery, Course, Dashboard' },
      ],
      highlights: [
        { value: 'Outcome-led', label: '"What you\u2019ll achieve" framing' },
        { value: 'Guided', label: 'domain + skill-level discovery' },
        { value: 'Trust-first', label: 'IIT / NIT collaboration badges' },
      ],
      flows: [
        { index: '01', name: 'Hero & Intent', screens: 'Landing', note: '"Master the skills that get you hired"' },
        { index: '02', name: 'Guided Discovery', screens: 'Search UX', note: 'Domain + skill level funnel' },
        { index: '03', name: 'Course Card System', screens: 'Grid', note: 'Instructor · outcomes · certification' },
        { index: '04', name: 'Outcome Framing', screens: '"What you\u2019ll achieve"', note: 'Moves the pitch from features to results' },
        { index: '05', name: 'Learning Path', screens: 'How it works', note: 'Mentorship + flexible learning pillars' },
      ],
      features: [
        'Domain + skill-level guided search',
        'Rich course cards with instructor & outcomes',
        'Project-based learning badges',
        'Collaboration logos (IITs, NITs) for trust',
        '"What You Will Achieve" outcome framing',
        'Mentorship & flexible learning highlights',
        'Clear login / register entry points',
        'Responsive, calm, content-first UI',
      ],
      gallery: [
        'https://image.thum.io/get/width/1600/https://lms.phntechnology.com/',
        'https://image.thum.io/get/width/1600/https://lms.phntechnology.com/courses',
        'https://image.thum.io/get/width/1600/https://lms.phntechnology.com/about',
        'https://image.thum.io/get/width/1600/https://lms.phntechnology.com/contact',
      ],
      takeaway:
        'Learners don\u2019t buy courses \u2014 they buy outcomes. Foregrounding instructors, certificates, and clear "what you\u2019ll achieve" moments made the platform feel less like a catalogue and more like a career partner.',
    },
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
