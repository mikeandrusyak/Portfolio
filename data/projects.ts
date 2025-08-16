export const projects = [
  {
    title: 'Demographic Challenge',
    description: 'Exploration of education, equality, and ownership in Switzerland.',
    github: 'https://github.com/mikeandrusyak/Demografie-Challenge',
    slug: 'demographic-challenge',
    embedUrl: '/api/projects/demographic-challenge',
    href: '/projects/demographic-challenge',
    tags: ['R', 'Data Analysis', 'Data Visualization', 'Blogging'],
    featured: true,
  },
  {
    title: 'Correlation Visualization',
    description: 'Interactive correlation visualizations with Plotly (R), proxied from GitHub Pages.',
    github: 'https://github.com/mikeandrusyak/correlation_with_plotly',
    slug: 'correlation-visualization-remote',
    embedUrl: '/api/projects/remote?url=https%3A%2F%2Fmikeandrusyak.github.io%2Fcorrelation_with_plotly%2F',
    href: '/projects/correlation-visualization-remote',
    tags: ['R', 'Plotly', 'Quarto', 'Data Visualization', 'Documentation reading'],
    featured: true,
  },
  {
    title: 'Delivery Time Simulation',
    description: 'Simulation of package delivery delays using Python and Jupyter Notebook.',
    github: 'https://github.com/mikeandrusyak/simulation_of_the_delivery_time',
    slug: 'delivery-time-simulation-remote',
    embedUrl: '/api/projects/remote?url=https%3A%2F%2Fmikeandrusyak.github.io%2Fsimulation_of_the_delivery_time%2F',
    href: '/projects/delivery-time-simulation-remote',
    tags: ['Python', 'Search public datasets', 'Render artificial data', 'Statistic', 'Simulation models'],
    featured: true,
  },
];

export type Project = typeof projects[number];

// Projects shown on homepage (max 4)
export const homepageProjects: Project[] = projects.filter(p => p.featured).slice(0,4);
