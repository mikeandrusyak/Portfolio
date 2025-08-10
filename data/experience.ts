export const experience = [
  {
    title: 'DevOps Engineer',
    company: 'Alten',
    period: 'Jun 2025 – Present',
    description: 'Working for ABB via ALTEN. Focus on CI/CD migration and improvements...',
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
    description: 'Studying data analysis, machine learning, and robotics. Working on real-world projects and research...',
    skills: ['Education'],
  },
  {
    title: 'CI/CD Intern',
    company: 'ABB',
    period: 'Jan 2024 – Jun 2025',
    description: 'Ansible provisioning for Automation and Configuration Management in build system...',
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
    description: 'Designed algorithms; cleaned and analyzed datasets...',
    skills: ['Data Cleaning', 'Algorithms', 'Python', 'Exploratory Analysis'],
    achievements: [
      'Parsed open sources for market analysis of games and 2D/3D artists',
      'Cleaned the collected data and built clear visualizations to identify new markets for the company',
    ],
  },
];

export type Experience = typeof experience[number];
