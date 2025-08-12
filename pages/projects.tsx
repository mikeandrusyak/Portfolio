import Head from 'next/head';
import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

// Unique tags helper
const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

export default function ProjectsPage() {
  const [active, setActive] = useState<string[]>([]);
  const toggle = (tag: string) => {
    setActive(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  const clear = () => setActive([]);

  const filtered = useMemo(() => {
    if (active.length === 0) return projects;
    return projects.filter(p => active.every(a => p.tags.map(t => t.toLowerCase()).includes(a.toLowerCase())));
  }, [active]);

  return (
    <>
      <Head>
  <title>All Projects | Mykhailo Andrusiak</title>
  <meta name="description" content="All projects with tag filtering" />
      </Head>
      <main className="relative min-h-screen px-6 py-10 md:px-16 md:py-16 bg-gradient-to-br from-[#2d1a14] via-[#4e1e0f] to-[#9e4c2c] text-sunset-peach">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-3xl md:text-4xl font-bold">All Projects</motion.h1>
            <Button as="a" href="/" variant="outline" className="border-sunset-peach/40">← Back</Button>
          </div>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map(tag => {
              const activeState = active.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggle(tag)}
                  className={[
                    'px-3 py-1 rounded-full text-xs font-medium transition-colors border',
                    activeState
                      ? 'bg-sunset-peach text-sunset-brown border-sunset-peach'
                      : 'bg-sunset-brown/60 text-sunset-peach/80 border-sunset-peach/30 hover:bg-sunset-brown'
                  ].join(' ')}
                >
                  {tag}
                </button>
              );
            })}
            {active.length > 0 && (
              <button onClick={clear} className="px-3 py-1 rounded-full text-xs font-medium bg-transparent border border-sunset-peach/40 text-sunset-peach/70 hover:text-sunset-peach hover:bg-sunset-peach/10">Clear</button>
            )}
          </div>

          {/* Result count */}
          <div className="text-sm text-sunset-peach/70 mb-4">
            Showing {filtered.length} / {projects.length} projects{active.length>0 && ' (filter active)'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  tags={project.tags}
                  href={(project as any).slug ? `/projects/${(project as any).slug}` : project.href}
                  colorIdx={idx}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
