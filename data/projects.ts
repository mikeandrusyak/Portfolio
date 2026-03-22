export const projects = [
  {
    title: 'Demographic Challenge',
    description: 'Exploration of education, equality, and ownership in Switzerland.',
    github: 'https://github.com/mikeandrusyak/Demografie-Challenge',
  slug: 'demographic-challenge',
  embedUrl: '/api/projects/remote?url=https%3A%2F%2Fmikeandrusyak.github.io%2FDemografie-Challenge%2F',
    href: '/projects/demographic-challenge',
    tags: ['R', 'Data Cleaning', 'Data Analysis', 'Data Visualization', 'Blogging'],
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
    featured: false,
  },
  {
    title: 'Delivery Time Simulation',
    description: 'Simulation of package delivery delays using Python and Jupyter Notebook.',
    github: 'https://github.com/mikeandrusyak/simulation_of_the_delivery_time',
    slug: 'delivery-time-simulation-remote',
    embedUrl: '/api/projects/remote?url=https%3A%2F%2Fmikeandrusyak.github.io%2Fsimulation_of_the_delivery_time%2F',
    href: '/projects/delivery-time-simulation-remote',
    tags: ['Python', 'Search public datasets', 'Render artificial data', 'Statistic', 'Simulation models'],
    featured: false,
  },
  {
    title: 'Robot Challenge',
    description: 'Autonomous robot navigation and control system using computer vision and sensor data processing.',
    github: 'https://github.com/mikeandrusyak/robot_challenge',
    slug: 'robot-challenge-remote',
    embedUrl: '/api/projects/remote?url=https%3A%2F%2Fmikeandrusyak.github.io%2Frobot_challenge%2F',
    href: '/projects/robot-challenge-remote',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Robotics', 'Autonomous Navigation', 'Sensor Data Processing', 'Event Logging'],
    featured: true,
  },
  {
    title: 'Traffic Monitoring Challenge',
    description: 'A computer vision application for real-time traffic monitoring, vehicle detection, and analysis.',
    github: 'https://github.com/mikeandrusyak/Traffic-monitoring-Challenge',
    slug: 'traffic-monitoring-challenge-remote',
    embedUrl: '/api/projects/remote?url=https%3A%2F%2Fmikeandrusyak.github.io%2FTraffic-monitoring-Challenge%2F',
    href: '/projects/traffic-monitoring-challenge-remote',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Object Detection', 'Video Processing', 
      'Data Cleaning', 'Data Analysis', 'Data Visualization', 'Data Pipelines', 'Google Cloud Platform'],
    featured: true,
  },
  {
    title: 'NYC Data Analysis',
    description: 'Comprehensive data analysis and visualization of New York City datasets to uncover patterns, trends, and valuable insights.',
    github: 'https://github.com/mikeandrusyak/NYC_data',
    slug: 'nyc-data-remote',
    embedUrl: '/api/projects/remote?url=https%3A%2F%2Fmikeandrusyak.github.io%2FNYC_data%2F',
    href: '/projects/nyc-data-remote',
    tags: ['Python', 'Data Cleaning', 'Data Analysis', 'Feature engineering', 'Data Visualization', 'Data Pipelines',
       'CI/CD', 'A/B Testing', 'Packaging and CLI UX',  'API', 'Blogging'],
    featured: true,
  },
];

export type Project = typeof projects[number];

// Projects shown on homepage (max 4)
export const homepageProjects: Project[] = projects.filter(p => p.featured).slice(0,4);
