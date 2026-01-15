import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  microsoftClub,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'LinkedIn',
    icon: frontend,
    link: 'https://www.linkedin.com/in/gaurish-budhiraja',
  },
  {
    title: 'Github',
    icon: backend,
    link: 'https://github.com/GaurishBudhiraja'
  },
  {
    title: 'Leetcode',
    icon: ux,
    link: 'https://leetcode.com/u/gaurish_01/',
  },
  {
    title: 'Resume',
    icon: prototyping,
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:ap:28f76cb8-0f0c-4e49-aedf-1a9ce430f4b6',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Technical Member',
    company_name: 'OSPC Cybersecurity and Blockchain',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2024 - Present',
  },
  {
    title: 'Product Design & Manufacturer',
    company_name: 'ProdInno Club',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jun 2025 - Present',
  },
  {
    title: 'Technical Team Member',
    company_name: 'CYSCOM VIT CHENNAI',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sept 2025 - Present',
  },
  {
    title: 'Cyber Security Member',
    company_name: 'Microsoft Innovation Club',
    icon: microsoftClub,
    iconBg: '#333333',
    date: 'Oct 2025 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'ISHAL Assistant',
    description: 'Developed an AI assistant for voice commands, text-to-speech, and system automation with modular command execution using Python & NLP',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/GaurishBudhiraja',
  },
  {
    id: 'project-2',
    name: 'IDS Model using ML',
    description:
      ' Implemented ML-based IDS for anomaly detection in undersea optical fiber networks with optimized threat classification.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/GaurishBudhiraja/Intrusion-Detection-ML',
  },
  {
    id: 'project-3',
    name: 'Sith-Portal Web App',
    description: 'Built a community-driven web application with user profiles, posts, and interaction features using TypeScript and modern front-end practices; focused on scalable UI and feature-driven development.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/GaurishBudhiraja/SithPortal',
  },
  {
    id: 'project-4',
    name: 'Android APK Backdooring',
    description: `Built a controlled proof-of-concept backdoor to test Android 13 vulnerabilities and remote access using Python,Android and Metasploit.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
  },
  {
    id: 'project-5',
    name: 'IoT Systems',
    description:
      'Designed IoT solutions with sensors and microcontrollers for automated waste management and water-efficient irrigation - Smart Dustbin and Smart Irrigation System.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
  },
];

export { services, technologies, experiences, projects };
