// Mock data for Devsync clone

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '#about' },
  { label: 'Projects', to: '#projects' },
  { label: 'Services', to: '#services' },
  { label: 'Process', to: '#process' },
  { label: 'Blog', to: '#blog' },
  { label: 'Contact', to: '#contact' },
];

export const HERO = {
  greeting: "Hey,",
  wave: "👋",
  role: "I'm a Full Stack Developer",
  name: 'BrunoSimon',
  description:
    'I craft fast, scalable, and user-friendly web applications with modern JavaScript frameworks — combining React on the frontend with robust server-side solutions using Node.js.',
  image: 'https://images.pexels.com/photos/19805878/pexels-photo-19805878.jpeg',
};

export const CONTACT = {
  email: 'info@brunosimon.com',
  phone: '+39 03 463 853 02',
  socials: [
    { label: 'Twitter(X)', url: 'https://twitter.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'CodePen', url: 'https://codepen.io/' },
  ],
};

export const ABOUT = {
  portrait: 'https://images.unsplash.com/photo-1581913229425-9c6b993fc107?w=900&q=80',
  bio: "I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation. You'll find me building side projects, diving into new tech stacks, or simply exploring what's next in the world of web development.",
};

export const SKILLS = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { category: 'Server-side development', items: ['Node.js', 'Express.js', 'MongoDB', 'PHP', 'Laravel'] },
  { category: 'Tools', items: ['Git', 'Github', 'Stack Overflow', 'AWS', 'Docker'] },
];

export const STATS = [
  { value: '6+', label: 'Years in Experience' },
  { value: '16+', label: 'Clients Worldwide' },
  { value: '96+', label: 'Completed Projects' },
];

const DEFAULT_DETAIL = {
  client: 'NovaAI',
  industry: 'Agency / Portfolio',
  timeline: '3 Weeks',
  livePreview: 'https://example.com/preview',
  overview: [
    'This project is a fully responsive, performance-optimized web template built from scratch for design and creative agencies. With a sleek layout, smooth animations, and modern UI components, the goal was to deliver a bold online presence that captures attention while remaining user-friendly and flexible.',
    'Designed with scalability and aesthetics in mind, it helps agencies stand out in the digital landscape through dynamic content sections, a striking hero area, and an interactive case study display.',
  ],
  role: [
    'Full-stack Development',
    'UI Implementation with Tailwind CSS',
    'Component-based architecture with React',
    'Page routing & smooth navigation',
    'Animation integration (Framer Motion / GSAP)',
    'Deployment & optimization',
  ],
  stack: [
    { label: 'Frontend', value: 'React.js, Tailwind CSS' },
    { label: 'Animations', value: 'Framer Motion' },
    { label: 'Routing', value: 'React Router' },
    { label: 'Deployment', value: 'Vercel' },
    { label: 'Others', value: 'GSAP, ScrollReveal, Icon libraries' },
  ],
  features: [
    'Responsive hero section with scroll-based animation',
    'Interactive project gallery with filter & hover effects',
    'Modular components for easy reuse (Navbar, Footer, CTA, etc.)',
    'Case study template layout',
    'Animated transitions between pages',
    'Performance-optimized (Lighthouse score: 90+)',
    'SEO-ready semantic structure',
    'Custom 404 page',
  ],
  challenges: [
    {
      challenge: 'Achieving smooth yet lightweight animations',
      solution:
        'Integrated Framer Motion for component-level control and fallback with GSAP for scroll sequences',
    },
    {
      challenge: 'Keeping layout pixel-perfect across devices',
      solution:
        'Implemented custom breakpoints and used Tailwind\u2019s utility classes smartly',
    },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80',
  ],
  takeaway:
    'This build proves how modern tooling can be made accessible through the right design and storytelling. By combining function and emotion, we shipped an experience that delivers trust, engagement, and results.',
};

export const PROJECTS = [
  {
    slug: 'techzo',
    title: 'Techzo',
    image: 'https://images.unsplash.com/photo-1610196600828-517131fddddd?w=1600&q=80',
    description:
      'Techzo is a cutting-edge design agency template built to showcase innovation, digital expertise, and a bold creative presence online.',
    tags: ['HTML5 & CSS', 'Framer Motion', 'Vite'],
    detail: { ...DEFAULT_DETAIL, client: 'NovaAI', industry: 'Agency / Portfolio', timeline: '3 Weeks' },
  },
  {
    slug: 'lumin-studio',
    title: 'Lumin Studio',
    image: 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?w=1600&q=80',
    description:
      'LuminStudio blends elegance and clarity — a modern design agency template crafted to highlight creative work and impress potential clients.',
    tags: ['HTML5 & Tailwind CSS', 'React', 'Vite'],
    detail: { ...DEFAULT_DETAIL, client: 'Lumin Co.', industry: 'Design Agency', timeline: '4 Weeks' },
  },
  {
    slug: 'nubuilt',
    title: 'Nubuilt',
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=1600&q=80',
    description:
      'Crafted with clean, semantic code — Nubuilt is a sleek architecture template built for performance, responsiveness, and timeless design.',
    tags: ['HTML5', 'CSS', 'GSAP'],
    detail: { ...DEFAULT_DETAIL, client: 'Nubuilt Studio', industry: 'Architecture', timeline: '5 Weeks' },
  },
  {
    slug: 'design-orbit',
    title: 'Design Orbit',
    image: 'https://images.pexels.com/photos/7038159/pexels-photo-7038159.jpeg?w=1600',
    description:
      'Bold, creative, and conversion-focused — DesignOrbit is a sleek portfolio website template made for design agencies to showcase work.',
    tags: ['HTML5 & CSS', 'GSAP', 'Vite'],
    detail: { ...DEFAULT_DETAIL, client: 'Orbit Labs', industry: 'Creative Agency', timeline: '3 Weeks' },
  },
  {
    slug: 'formation-time',
    title: 'Formation Time',
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=1600&q=80',
    description:
      'Professional and polished — FormationTime is a clean consultant website template designed to build trust, highlight services, and convert leads.',
    tags: ['HTML5', 'Tailwind CSS', 'Alpine.js'],
    detail: { ...DEFAULT_DETAIL, client: 'FormationTime', industry: 'Consulting', timeline: '2 Weeks' },
  },
  {
    slug: 'laundrybee',
    title: 'LaundryBee',
    image: 'https://images.pexels.com/photos/12269761/pexels-photo-12269761.jpeg?w=1600',
    description:
      'Fresh, fast, and user-friendly — Laundrybee is a clean and modern website template built to promote laundry services and boost online bookings.',
    tags: ['Tailwind CSS', 'Alpine.js', 'Formspree'],
    detail: { ...DEFAULT_DETAIL, client: 'LaundryBee', industry: 'Services / SaaS', timeline: '3 Weeks' },
  },
];

export const SERVICES = [
  {
    index: '01',
    title: 'Custom Web Development',
    description:
      'Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.',
    image: 'https://images.unsplash.com/photo-1732209556859-72cfe81ae9ab?w=800&q=80',
  },
  {
    index: '02',
    title: 'Frontend Engineering',
    description:
      'Pixel-perfect interfaces with modern frameworks, focused on accessibility, performance, and delightful motion design.',
    image: 'https://images.unsplash.com/photo-1713947503813-da5351679a0c?w=800&q=80',
  },
  {
    index: '03',
    title: 'Server logic & API Development',
    description:
      'Scalable APIs, robust data models, and secure auth — built with Node.js, Express, and MongoDB.',
    image: 'https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?w=800',
  },
  {
    index: '04',
    title: 'Full Stack Application Development',
    description:
      'End-to-end product engineering — from requirements to deployment with CI/CD and cloud infrastructure.',
    image: 'https://images.unsplash.com/photo-1581913229425-9c6b993fc107?w=800&q=80',
  },
];

export const PROCESS = [
  {
    index: '01',
    title: 'Plan & Architect',
    description:
      'Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints.',
  },
  {
    index: '02',
    title: 'Build & Develop',
    description:
      'Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component — UI or API — is maintainable.',
  },
  {
    index: '03',
    title: 'Launch & Support',
    description:
      'I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Bruno immediately understood our product goals and translated them into a beautifully optimized web experience. His technical expertise and collaborative spirit made a complex project feel effortless.',
    name: 'Carlos Méndez',
    title: 'Co-Founder of Launchly',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=240&q=80',
  },
  {
    quote:
      'Working with Bruno was a game-changer for our e-commerce revamp. He not only delivered scalable, high-quality code but also brought clarity and structure to the entire process. Communication was seamless from start to finish.',
    name: 'Sophie Lin',
    title: 'Head of Product, Drift & Bloom',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&q=80',
  },
  {
    quote:
      'Working with Bruno Simon was one of the best decisions we made for our web platform. He understood our vision, delivered clean & scalable code, and communicated clearly throughout the project.',
    name: 'Ronald Richards',
    title: 'CEO, BankTech Inc.',
    avatar: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=240&q=80',
  },
];

export const CLIENTS = [
  'Acme', 'Nova', 'Vertex', 'Pulse', 'Orbit', 'Zenith', 'Lumen', 'Forge',
];

export const BLOGS = [
  {
    slug: 'frontend-vs-backend',
    image: 'https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?w=900',
    category: 'React JS',
    date: 'Dec 12, 2025',
    title: 'Frontend vs. Backend: Which Path Should You Choose?',
  },
  {
    slug: 'seo-for-developers',
    image: 'https://images.pexels.com/photos/19805878/pexels-photo-19805878.jpeg?w=900',
    category: 'Development',
    date: 'Dec 27, 2025',
    title: '11 SEO for Developers: Optimizing Websites for Better Rankings',
  },
  {
    slug: 'remote-workflow',
    image: 'https://images.unsplash.com/photo-1713947503813-da5351679a0c?w=900&q=80',
    category: 'Freelancing',
    date: 'May 31, 2025',
    title: 'Working Remotely as a Full Stack Developer: My Workflow & Tools',
  },
];
