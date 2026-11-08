export const PROFILE = {
  name: 'Maheswari Kandlagunta',
  role: 'Computer Science Engineering Student | AI & ML Enthusiast | Aspiring Software Developer',
  shortRole: 'AI & ML Engineering Student',
  intro:
    'Motivated Computer Science Engineering student passionate about software development, programming, artificial intelligence and emerging technologies. I enjoy exploring new technologies, building meaningful projects and continuously improving my problem-solving skills.',
  about:
    'I am a second-year B.Tech student in Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning. My focus is on building a strong foundation in programming, data structures, and applied AI — turning concepts into working, meaningful projects. I am drawn to the intersection of software engineering and intelligent systems, and I am most engaged when I am learning something new, solving a hard problem, or shipping a prototype that did not exist before.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/kandlagunta-maheswari-7164253b3',
    github: 'https://github.com/maheswarikandlagunta375',
    leetcode: 'https://leetcode.com/u/maheswari_221145/',
  },
  resumeUrl: '/Maheswari_Kandlagunta_Resume.pdf',
};

export type EducationItem = {
  institution: string;
  qualification: string;
  period: string;
  detail: string;
  highlight?: string;
};

export const EDUCATION: EducationItem[] = [
  {
    institution: 'BVRIT Hyderabad College of Engineering for Women',
    qualification: 'B.Tech — Computer Science & Engineering (AI & ML)',
    period: 'Present · Second Year',
    detail: 'Expected Graduation · August 2029',
    highlight: 'CGPA 9.63 / 10',
  },
  {
    institution: 'Narayana Junior College',
    qualification: 'Intermediate (TSBIE)',
    period: '2025',
    detail: '99.83%',
  },
  {
    institution: 'Bhashyam Public School',
    qualification: 'SSC',
    period: '2023',
    detail: '10 CGPA',
  },
];

export type SkillCategory = {
  title: string;
  icon: 'code' | 'database' | 'tools' | 'sparkles' | 'brain';
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'code',
    skills: ['Python', 'Java'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['SQL'],
  },
  {
    title: 'Developer Tools',
    icon: 'tools',
    skills: ['GitHub'],
  },
  {
    title: 'AI & Development',
    icon: 'sparkles',
    skills: [
      'AI-Assisted Development (Vibe Coding)',
      'Prompt-Driven Prototyping',
      'Google AI Skills',
      'Anthropic AI Skills',
    ],
  },
  {
    title: 'Core Skills',
    icon: 'brain',
    skills: [
      'Problem Solving',
      'Data Structures & Algorithms (Fundamentals)',
      'Analytical Thinking',
    ],
  },
];

export type ProjectLink = {
  type: 'github' | 'live' | 'internal';
  url: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  description: string;
  focusAreas: string[];
  tags: string[];
  focus: string;
  image: string;
  imageAlt: string;
  links: ProjectLink[];
  collaboration?: boolean;
  contribution?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'nirvana',
    title: 'NIRVANA',
    tagline: 'Early warnings. Faster relief.',
    category: 'Disaster Management Platform',
    problem:
      'Floods and landslides involve delayed warnings, poor emergency coordination, fraudulent donation appeals, and difficulty locating missing persons.',
    description:
      'An integrated disaster management platform combining flood prediction, landslide detection, verified donation coordination, and missing-person tracking — built to deliver early warnings and faster, more coordinated relief.',
    focusAreas: [
      'Prediction & Early Warning',
      'Emergency Communication',
      'Volunteer Coordination',
      'Verified Donations',
      'Missing-Person Tracking',
      'Low-Connectivity Accessibility',
    ],
    tags: ['Prediction', 'Emergency Response', 'Donations', 'Tracking'],
    focus: 'Disaster Management',
    image: 'https://images.pexels.com/photos/36072012/pexels-photo-36072012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Rescue workers helping people during a flood',
    links: [
      { type: 'github', url: 'https://github.com/maheswarikandlagunta375/Disaster-management-and-response-coordination', label: 'View on GitHub' },
    ],
  },
  {
    id: 'hyderabad-smart-transit',
    title: 'Hyderabad Smart Transit',
    tagline: 'AI-assisted multimodal route planning',
    category: 'AI-Assisted Multimodal Route Planning',
    problem:
      'Commuters struggle to identify suitable routes because information about buses, metros, transfers, and delays is scattered across disconnected sources.',
    description:
      'An AI-assisted route-planning platform integrating bus and metro transportation into a single journey planner. It recommends routes based on travel time, distance, transfers, delays, and user preferences.',
    focusAreas: [
      'Multimodal Routing',
      'Intelligent Recommendations',
      'Personalization',
      'Delay-Aware Alternatives',
    ],
    tags: ['AI Routing', 'Transit', 'Personalization', 'Multimodal'],
    focus: 'Smart Mobility',
    image: 'https://images.pexels.com/photos/20215267/pexels-photo-20215267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Commuters waiting at a bus stop in an urban setting',
    collaboration: true,
    contribution: '',
    links: [
      { type: 'internal', url: '#hyderabad-smart-transit', label: 'View Project Details' },
    ],
  },
  {
    id: 'herhealth-ai',
    title: 'HERHealth-AI',
    tagline: 'AI-powered women\u2019s health & research platform',
    category: "Women's Health & Research Platform",
    problem:
      'Women often struggle to access reliable health information and relevant research resources tailored to their needs.',
    description:
      'An AI-powered platform improving access to women\u2019s health information, personalized guidance, and research resources — making trusted knowledge easier to find and act on.',
    focusAreas: [
      'AI-Driven Assistance',
      'Information Retrieval',
      'Personalized Guidance',
      'Research Discovery',
    ],
    tags: ['AI Assistant', 'Health', 'Research', 'Personalization'],
    focus: 'HealthTech',
    image: 'https://images.pexels.com/photos/8539194/pexels-photo-8539194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Two women using a laptop in a sunny park',
    links: [
      {
        type: 'live',
        url: 'https://herhealth-ai-platfor-8ej9.bolt.host',
        label: 'Visit Live Website',
      },
    ],
  },
];

export type Achievement = {
  title: string;
  detail?: string;
  year: string;
  tag: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Kithack 2026 — Participant',
    year: '2026',
    tag: 'Hackathon',
  },
  {
    title: 'Flipkart GRiD 8.0 — Qualified for Round 2',
    year: '2026',
    tag: 'Hackathon',
  },
  {
    title: 'MRDU AI Hack — Participant',
    year: '2026',
    tag: 'Hackathon',
  },
  {
    title: 'Adobe University Hackathon — Participant',
    year: '2026',
    tag: 'Hackathon',
  },
  {
    title: 'GREAT APPSEC HACKATHON 2026 — Qualified for Round 2',
    year: '2026',
    tag: 'Hackathon',
  },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
