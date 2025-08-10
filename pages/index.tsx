import Head from 'next/head';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Github, Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { homepageProjects } from '../data/projects';
import { experience } from '../data/experience';
import { useState } from 'react';
import { ChevronDown, ChevronUp, ListChecks } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mykhailo Andrusiak | Portfolio</title>
        <meta name="description" content="Data Science Student at FHNW | DevOps Engineer for ABB | Explorer of data, algorithms and robots" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Mykhailo Andrusiak | Portfolio" />
        <meta property="og:description" content="Data Science Student at FHNW | DevOps Engineer for ABB | Explorer of data, algorithms and robots" />
        <meta property="og:image" content="/favicon.svg" />
        {/* Twitter card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mykhailo Andrusiak | Portfolio" />
        <meta name="twitter:description" content="Data Science Student at FHNW | DevOps Engineer for ABB | Explorer of data, algorithms and robots" />
        <meta name="twitter:image" content="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="relative bg-gradient-to-br from-[#2d1a14] via-[#4e1e0f] to-[#9e4c2c] min-h-screen text-sunset-peach flex flex-col md:flex-row md:gap-4">
        {/* Sidebar */}
        <aside className="flex flex-col justify-between w-full md:w-1/2 md:flex-none px-6 md:px-20 py-8 md:py-16 z-10 md:sticky md:top-0 md:h-screen">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-sunset-peach mb-2"
            >
              Mykhailo Andrusiak
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 text-lg md:text-xl text-sunset-peach/80 max-w-2xl"
            >
              Data Science Student at FHNW, DevOps Engineer for ABB
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 text-lg md:text-xl text-sunset-peach/80 max-w-2xl"
            >
              Explorer of data, algorithms and robots
            </motion.p>
            {/* Contact icons */}
            <div className="hidden" />
          </div>
          <div className="flex flex-col items-left gap-6 mt-12">
            <div className="flex flex-row justify-left gap-8">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                href="https://github.com/mikeandrusyak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sunset-orange transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                href="https://www.linkedin.com/in/qkw/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sunset-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                href="mailto:mykhailo.andrusiak@students.fhnw.ch"
                className="hover:text-sunset-orange transition-colors"
                aria-label="Email"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                href="tel:+41795275247"
                className="hover:text-sunset-orange transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-8 h-8" />
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-xs text-sunset-peach/40"
            >
              © {new Date().getFullYear()} Mykhailo Andrusiak
            </motion.div>
          </div>
        </aside>
        {/* Main content */}
  <section className="w-full md:flex-1 px-6 py-8 md:py-16 md:pr-20 md:h-screen md:overflow-auto">
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
            className="mb-6 text-lg md:text-xl text-sunset-peach/80 max-w-2xl"
          >
            Hi, I’m Mykhailo Andrusiak — a Data Science student at FHNW and a DevOps Engineer at ABB,
            passionate about transforming complex data into solutions that drive impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 text-lg md:text-xl text-sunset-peach/80 max-w-2xl"
          >
            I specialize in data analysis, machine learning, and automation, 
            combining technical expertise with a problem-solving mindset. 
            My work ranges from building CI/CD pipelines and optimizing cloud infrastructure
            to designing data-driven tools that solve real-world challenges.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-6 text-lg md:text-xl text-sunset-peach/80 max-w-2xl"
          >
            I enjoy creating systems that make life simpler and smarter — 
            whether it’s automating workflows, uncovering patterns in messy datasets,
            or turning raw data into strategies that work.
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
              {experience.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
              ))}
            </ul>
          </motion.div>
          {/* Projects section */}
          <div className="flex items-center justify-between mb-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-semibold text-sunset-peach"
              id="projects"
            >
              Projects
            </motion.h3>
            <Button as="a" href="/projects" variant="outline" size="md" className="border-sunset-peach/40">
              All Projects →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {homepageProjects.map((project, idx) => (
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
                  tags={project.tags}
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

function ExperienceItem({ exp }: { exp: any }) {
  const [open, setOpen] = useState(false);
  const hasAchievements = Array.isArray(exp.achievements) && exp.achievements.length > 0;
  return (
    <li className="bg-sunset-brown/60 rounded-lg px-4 py-3">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="font-medium">{exp.title}</span>
        <span className="opacity-70">@ {exp.company}</span>
        <span className="text-xs text-sunset-peach/60 ml-auto">{exp.period}</span>
      </div>
      <div className="text-sunset-peach/70 text-sm mt-1">{exp.description}</div>
      {Array.isArray(exp.skills) && (
        <ul className="flex flex-wrap gap-2 mt-3">
          {exp.skills.map((skill: string) => (
            <li
              key={skill}
              className="text-[10px] uppercase tracking-wide bg-sunset-brown/70 border border-sunset-peach/10 rounded px-2 py-1 text-sunset-peach/70 hover:text-sunset-peach transition-colors"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
      {hasAchievements && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="group flex items-center gap-2 text-xs font-semibold tracking-wide text-sunset-peach/70 hover:text-sunset-peach transition-colors"
            aria-expanded={open}
          >
            <ListChecks className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            {open ? 'Hide Achievement ':' Show solved tasks and achievements'}
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {open && (
            <ul className="mt-2 space-y-1 text-sunset-peach/70 text-xs list-disc list-inside animate-fadeIn">
              {exp.achievements.map((a: string, i: number) => (
                <li key={i} className="leading-relaxed">{a}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}
