import Head from 'next/head';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Demographic Challenge',
    description: 'Exploration of education, equality, and ownership in Switzerland.',
    github: 'https://github.com/mikeandrusyak/Demografie-Challenge',
  },
  {
    title: 'Correlation Visualization',
    description: 'Comparing correlation plots using Plotly in R for datasets of different sizes.',
    github: 'https://github.com/mikeandrusyak/correlation_with_plotly',
  },
  {
    title: 'Delivery Time Simulation',
    description: 'Simulation of package delivery delays using Python and Jupyter Notebook.',
    github: 'https://github.com/mikeandrusyak/simulation_of_the_delivery_time',
  },
  {
    title: 'Robot Challenge',
    description: 'Training a robot car to follow a map and perform tasks. Includes Jupyter Notebook and video.',
    github: 'https://github.com/mikeandrusyak/robot_challenge',
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
      <main className="relative bg-gradient-to-br from-[#2d1a14] via-[#4e1e0f] to-[#9e4c2c] min-h-screen text-sunset-peach flex flex-col md:flex-row md:gap-4">
        {/* Sidebar */}
        <aside className="flex flex-col justify-between w-full md:w-1/2 md:flex-none px-6 md:px-12 py-8 md:py-16 rounded-none z-10 md:sticky md:top-0 md:h-screen">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-sunset-peach mb-2"
            >
              Mykhailo Andrusiak
            </motion.h1>
            <p className="text-sunset-peach/80 text-lg mb-6">Data Science Student at FHNW</p>
            <p className="text-sunset-peach/70 text-base mb-8">Explorer of data, algorithms and robots</p>
            {/* Контакти-іконки */}
            <div className="hidden" />
          </div>
          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="flex flex-row justify-center gap-8">
              <a href="https://github.com/mikeandrusyak" target="_blank" rel="noopener noreferrer" className="hover:text-sunset-orange transition-colors" aria-label="GitHub">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com/in/mikeandrusyak" target="_blank" rel="noopener noreferrer" className="hover:text-sunset-orange transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><rect width="20" height="20" x="2" y="2" rx="4" fill="currentColor" className="text-sunset-peach/20"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 11v5m4-5v5m4-5v5" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
              <a href="mailto:mykhailo.andrusiak@students.fhnw.ch" className="hover:text-sunset-orange transition-colors" aria-label="Email">
                <Mail className="w-8 h-8" />
              </a>
              <a href="tel:+41791234567" className="hover:text-sunset-orange transition-colors" aria-label="Phone">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><rect width="20" height="20" x="2" y="2" rx="4" fill="currentColor" className="text-sunset-peach/20"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.094.21l-2.25 1.687a12.042 12.042 0 0 1-5.25-5.25l1.687-2.25a1.125 1.125 0 0 0 .21-1.094 16.978 16.978 0 0 1-.75-4.687A1.125 1.125 0 0 0 4.875 2.25H2.25A1.125 1.125 0 0 0 1.125 3.375c0 8.284 6.716 15 15 15z" /></svg>
              </a>
            </div>
          </div>
        </aside>
        {/* Main content */}
        <section className="w-full md:flex-1 px-4 py-10 md:py-24 h-screen md:h-auto overflow-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-semibold text-sunset-peach mb-8 text-left"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-10 text-lg md:text-xl text-sunset-peach/80 max-w-2xl"
          >
            Hi! I'm Mykhailo, a Data Science student at FHNW passionate about data, algorithms, and robotics. I love building tools that make sense of complex information and exploring new technologies.
          </motion.p>
          {/* Experience section (add your experience here) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-14"
          >
            <h3 className="text-2xl font-semibold mb-4 text-sunset-peach">Experience</h3>
            <ul className="space-y-3">
              <li className="bg-sunset-brown/60 rounded-lg px-4 py-3">
                <span className="font-medium">Data Science Student</span> @ FHNW <span className="text-xs text-sunset-peach/60">2022–present</span>
                <div className="text-sunset-peach/70 text-sm">Studying data analysis, machine learning, and robotics. Working on real-world projects and research.</div>
              </li>
              {/* Add more experience items here */}
            </ul>
          </motion.div>
          {/* Projects section */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-semibold text-sunset-peach mb-6"
            id="projects"
          >
            Projects
          </motion.h3>
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
        <div className="text-xs text-sunset-peach/40">© {new Date().getFullYear()} Mykhailo Andrusiak</div>
        </section>
      </main>
    </>
  );
}
