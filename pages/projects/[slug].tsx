import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { Github } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { projects, type Project } from '../../data/projects';

type Props = { project: Project };

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
};

export default function ProjectDetailPage({ project }: Props) {
  return (
    <>
      <Head>
        <title>{`${project.title} | Mykhailo Andrusiak`}</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://mykhailo-andrusiak.vercel.app/projects/${project.slug}`} />
      </Head>
      <main className="relative h-screen overflow-hidden bg-gradient-to-br from-[#2d1a14] via-[#4e1e0f] to-[#9e4c2c] text-sunset-peach">
        <div className="max-w-6xl mx-auto h-full px-6 md:px-16 flex flex-col">
          <div className="flex items-center justify-between gap-3 flex-wrap py-6 flex-none">
            <div className="min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
              <p className="text-sunset-peach/80 text-sm md:text-base mt-1 max-w-2xl">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="bg-sunset-brown/60 text-sunset-peach/80 text-xs px-2 py-1 rounded">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button as="a" href="/projects" variant="outline" className="border-sunset-peach/40">← Back</Button>
              <Button as="a" href={project.github} target="_blank" variant="outline" className="border-sunset-peach/40">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              {project.liveUrl && (
                <Button as="a" href={project.liveUrl} target="_blank" variant="peach">Open fullscreen</Button>
              )}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-sunset-brown/40 shadow-lg bg-sunset-brown/40 flex-1 min-h-0 mb-3">
            {project.embedUrl ? (
              <iframe src={project.embedUrl} title={project.title} loading="lazy" className="w-full h-full bg-white" />
            ) : (
              <div className="p-6 text-sunset-peach/80">No embedded content configured.</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
