export const projects = [
  {
    title: 'Demographic Challenge',
    description: 'Exploration of education, equality, and ownership in Switzerland.',
    github: 'https://github.com/mikeandrusyak/Demografie-Challenge',
    tags: ['Python', 'Data Analysis', 'Jupyter Notebook'],
  },
  {
    title: 'Correlation Visualization',
    description: 'Comparing correlation plots using Plotly in R for datasets of different sizes.',
    github: 'https://github.com/mikeandrusyak/correlation_with_plotly',
    tags: ['R', 'Plotly', 'Data Visualization'],
  },
  {
    title: 'Delivery Time Simulation',
    description: 'Simulation of package delivery delays using Python and Jupyter Notebook.',
    github: 'https://github.com/mikeandrusyak/simulation_of_the_delivery_time',
    tags: ['Python', 'Simulation', 'Jupyter Notebook'],
  },
  {
    title: 'Robot Challenge',
    description: 'Training a robot car to follow a map and perform tasks. Includes Jupyter Notebook and video.',
    github: 'https://github.com/mikeandrusyak/robot_challenge',
    tags: ['Python', 'Robotics', 'Jupyter Notebook'],
  },
];

export type Project = typeof projects[number];
