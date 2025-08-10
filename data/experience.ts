export const experience = [
  {
    title: 'DevOps Engineer',
    company: 'Alten',
    period: 'Jun 2025 – Present',
    description: 'Working for ABB via ALTEN. Focus on CI/CD migration and improvements...',
    skills: ['DevOps', 'CI/CD', 'Ansible', 'Azure', 'Data Engineering'],
  },
  {
    title: 'Data Science Student',
    company: 'FHNW',
    period: 'Sep 2024 – Present',
    description: 'Studying data analysis, machine learning, and robotics. Working on real-world projects and research...',
    skills: ['Education, see more in Projects'],
  },
  {
    title: 'CI/CD Intern',
    company: 'ABB',
    period: 'Jan 2024 – Jun 2025',
    description: 'Ansible provisioning for Automation and Configuration Management in build system...',
    skills: ['CI/CD', 'Ansible', 'Automation', 'Jenkins', 'Git'],
  },
  {
    title: 'Data Science Intern',
    company: 'Retrostyle Games',
    period: 'Jul 2022 – Sep 2022',
    description: 'Designed algorithms; cleaned and analyzed datasets...',
    skills: ['Data Cleaning', 'Algorithms', 'Python', 'Exploratory Analysis'],
  },
];

export type Experience = typeof experience[number];
