export const experience = [
  {
    title: 'DevOps Engineer',
    company: 'Alten',
    period: 'Jun 2025 – Present',
    description: 'Embedded with ABB\'s build infrastructure team via Alten. Own end-to-end ownership of CI/CD pipeline modernisation — from design through rollout — serving multiple engineering teams across the organisation.',
    skills: ['DevOps', 'CI/CD', 'Ansible', 'Azure', 'Data Engineering'],
    achievements: [
      'Designed migration plan for legacy CI/CD pipelines reducing migration times by ~30%',
      'Builded system for monitoring error in CI/CD pipelines',
      'Integrated caching in CI/CD pipelines that reduced build times by ~20% per build',
      'Designed new Data Base schema for storing all possible and clean data',
    ],
  },
  {
    title: 'Data Science Student',
    company: 'FHNW',
    period: 'Sep 2024 – Present',
    description: 'Full-time degree programme covering statistics, machine learning, data engineering, and applied robotics. Projects span real-world datasets, autonomous systems, and cloud-based data pipelines — all published at mykhailo-andrusiak.vercel.app.',
    skills: ['Education'],
  },
  {
    title: 'CI/CD Intern',
    company: 'ABB',
    period: 'Jan 2024 – Jun 2025',
    description: 'Hands-on internship inside ABB\'s CI/CD infrastructure. Delivered automation tooling that eliminated hours of manual work per release cycle and improved pipeline observability across multiple teams.',
    skills: ['CI/CD', 'Ansible', 'Automation', 'Jenkins', 'Git'],
    achievements: [
      'Automated provisioning scripts decreasing manual setup from 4h to 30m',
      'Builded KPI Dashboard for monitoring CI/CD pipeline performance',
      'Implemented caching strategy cutting build artifact fetch time 40%',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'Retrostyle Games',
    period: 'Jul 2022 – Sep 2022',
    description: 'Data science internship focused on market research for the games industry. Collected and cleaned open-source data, then built visualisations that surfaced actionable insights for business development.',
    skills: ['Data Cleaning', 'Algorithms', 'Python', 'Exploratory Analysis'],
    achievements: [
      'Parsed open sources for market analysis of games and 2D/3D artists',
      'Cleaned the collected data and built clear visualizations to identify new markets for the company',
    ],
  },
];

export type Experience = typeof experience[number];
