export const experience = [
  {
    title: 'DevOps Engineer',
    company: 'Alten',
    period: 'Jun 2025 – Present',
    description: 'Embedded with ABB\'s build infrastructure team via Alten. End-to-end ownership of CI/CD pipeline modernisation — from design through rollout — serving multiple engineering teams across the organisation.',
    skills: ['DevOps', 'CI/CD', 'Ansible', 'Azure', 'Data Engineering'],
    achievements: [
      'Designed a migration plan for legacy CI/CD pipelines, reducing migration times by ~30%',
      'Built an error-monitoring system for CI/CD pipelines',
      'Integrated caching into CI/CD pipelines, reducing build times by ~20% per build',
      'Designed a new database schema for centralised, clean storage of pipeline data',
    ],
  },
  {
    title: 'CI/CD Intern',
    company: 'ABB',
    period: 'Jan 2024 – Jun 2025',
    description: 'Hands-on internship inside ABB\'s CI/CD infrastructure. Delivered automation tooling that eliminated hours of manual work per release cycle and improved pipeline observability across multiple teams.',
    skills: ['CI/CD', 'Ansible', 'Automation', 'Jenkins', 'Git'],
    achievements: [
      'Automated provisioning scripts, decreasing manual setup time from 4 hours to 30 minutes',
      'Built a KPI dashboard for monitoring CI/CD pipeline performance',
      'Implemented a caching strategy that cut build artifact fetch times by 40%',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'Retrostyle Games',
    period: 'Jul 2022 – Sep 2022',
    description: 'Data science internship focused on market research for the games industry. Collected and cleaned open-source data, then built visualisations that surfaced actionable insights for business development.',
    skills: ['Data Cleaning', 'Algorithms', 'Python', 'Exploratory Analysis'],
    achievements: [
      'Parsed open data sources for market analysis of games and 2D/3D art services',
      'Cleaned the collected data and built clear visualisations that identified new markets for the company',
    ],
  },
];

export type Experience = typeof experience[number];
