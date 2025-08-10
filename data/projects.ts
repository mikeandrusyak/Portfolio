export const projects = [
  {
    title: 'Demographic Challenge',
    description: 'Exploration of education, equality, and ownership in Switzerland.',
    github: 'https://github.com/mikeandrusyak/Demografie-Challenge',
  tags: ['R', 'Data Analysis', 'Data Visualization', 'Blogging'],
  featured: true,
  },
  {
    title: 'Correlation Visualization',
    description: 'Comparing correlation plots using Plotly in R for datasets of different sizes.',
    github: 'https://github.com/mikeandrusyak/correlation_with_plotly',
  tags: ['R', 'Plotly', 'Data Visualization', 'Documentation Reading'],
  featured: true,
  },
  {
    title: 'Delivery Time Simulation',
    description: 'Simulation of package delivery delays using Python and Jupyter Notebook.',
    github: 'https://github.com/mikeandrusyak/simulation_of_the_delivery_time',
  tags: ['Python', 'Search public datasets', 'Render artificial data', 'Statistic'],
  featured: true,
  },
  {
    title: 'Robot Challenge',
    description: 'Training a robot car to follow a map and perform tasks. Includes Jupyter Notebook and video.',
    github: 'https://github.com/mikeandrusyak/robot_challenge',
  tags: ['Python', 'Robotics', 'SSH', 'Algorithms building', 'ML'],
  featured: true,
  },
];

export type Project = typeof projects[number];

// Projects shown on homepage (max 4)
export const homepageProjects: Project[] = projects.filter(p => p.featured).slice(0,4);
