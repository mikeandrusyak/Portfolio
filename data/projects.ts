export const projects = [
  {
    title: 'Demographic Challenge',
    description: 'Exploration of education, equality, and ownership in Switzerland.',
    github: 'https://github.com/mikeandrusyak/Demografie-Challenge',
  // Stable identifier for dynamic routes
  slug: 'demographic-challenge',
  // URL to embed (API route serving the HTML)
  embedUrl: '/api/projects/demographic-challenge',
  // Back-compat: direct href still supported by Card if needed
  href: '/projects/demographic-challenge',
  tags: ['R', 'Data Analysis', 'Data Visualization', 'Blogging'],
  featured: true,
  },
];

export type Project = typeof projects[number];

// Projects shown on homepage (max 4)
export const homepageProjects: Project[] = projects.filter(p => p.featured).slice(0,4);
