import Head from 'next/head';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI-Powered Portfolio Analyzer',
    description: 'A tool that uses machine learning to analyze and visualize investment portfolios for optimal growth.',
    github: 'https://github.com/mikeandrusyak/ai-portfolio-analyzer',
  },
  {
    title: 'Robotics Path Planner',
    description: 'A robotics project implementing advanced path planning algorithms for autonomous navigation.',
    github: 'https://github.com/mikeandrusyak/robotics-path-planner',
  },
  {
    title: 'DataViz Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with sunset-inspired themes.',
    github: 'https://github.com/mikeandrusyak/dataviz-dashboard',
  },
  {
    title: 'Algorithm Explorer',
    description: 'A web app to explore, visualize, and learn about classic and modern algorithms.',
    github: 'https://github.com/mikeandrusyak/algorithm-explorer',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mykhailo Andrusiak | Portfolio</title>
        <meta name="description" content="Data Science Student at FHNW | Explorer of data, algorithms and robots" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-sunset-brown via-sunset-orange to-sunset-peach text-sunset-peach flex flex-col items-center">
        <section className="flex flex-col justify-center items-center h-screen w-full px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-sunset-peach drop-shadow-lg text-center"
          >
            Mykhailo Andrusiak
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-2xl text-sunset-peach/80 text-center max-w-2xl"
          >
            Data Science Student at FHNW | Explorer of data, algorithms and robots
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 flex gap-4"
          >
            <Button as="a" href="https://github.com/mikeandrusyak" variant="sunset" size="lg" target="_blank">
              <Github className="w-5 h-5 mr-2" /> GitHub
            </Button>
            <Button as="a" href="mailto:mykhailo.andrusiak@students.fhnw.ch" variant="peach" size="lg">
              <Mail className="w-5 h-5 mr-2" /> Contact
            </Button>
          </motion.div>
        </section>
        <section className="w-full max-w-5xl px-4 py-16" id="projects">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-semibold text-sunset-peach mb-8 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  colorIdx={idx}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
