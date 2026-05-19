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
  { id: 'certifications', 
    title: 'Certifications' 
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
    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:ap:36683664-5498-4e63-af41-b2ab23f51440',
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
    name: 'Remote Command Execution Framework',
    description:
      'Developed a TCP-based remote command execution and endpoint telemetry framework for analyzing adversarial communication channels, Linux process execution behavior, and detection engineering workflows.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Linux',
        color: 'green-text-gradient',
      },
      {
        name: 'TCP/IP',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/GaurishBudhiraja/Remote-Command-Execution-Framework',
  },

  {
    id: 'project-2',
    name: 'ML-Based Intrusion Detection System',
    description:
      'Developed a machine learning based intrusion detection system for anomaly detection and malicious traffic classification using security-focused datasets and neural network pipelines.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'TensorFlow',
        color: 'green-text-gradient',
      },
      {
        name: 'Machine Learning',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/GaurishBudhiraja/Intrusion-Detection-ML',
  },

  {
    id: 'project-3',
    name: 'VIT SkillMatch',
    description:
      'Built a full-stack internship shortlisting and recruitment management platform with SQL-based eligibility filtering and scalable backend workflows.',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'SQL',
        color: 'green-text-gradient',
      },
      {
        name: 'Full-Stack',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/GaurishBudhiraja/VIT-SkillMatch',
  },

  {
    id: 'project-4',
    name: 'ISHAL AI Assistant',
    description:
      'Developed an AI-powered automation assistant integrating modular command execution, NLP workflows, text-to-speech functionality, and intelligent system automation.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Automation',
        color: 'green-text-gradient',
      },
      {
        name: 'NLP',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/GaurishBudhiraja/ISHAL_ASSISTANT',
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
    repo: 'https://github.com/GaurishBudhiraja',
  },
];

export { services, technologies, experiences, projects };
