import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '../../components/ui/button';
import { projects } from '../../data/projects';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const project = projects.find(p => p.slug === slug);

  if (!slug || !project) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-[#2d1a14] via-[#4e1e0f] to-[#9e4c2c] text-sunset-peach">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button as="a" href="/projects" variant="outline">← Back to Projects</Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Mykhailo Andrusiak</title>
        <meta name="description" content={project.description} />
      </Head>
      <main className="relative h-screen overflow-hidden bg-gradient-to-br from-[#2d1a14] via-[#4e1e0f] to-[#9e4c2c] text-sunset-peach">
        <div className="max-w-6xl mx-auto h-full px-6 md:px-16 flex flex-col">
          <div className="flex items-center justify-between gap-3 flex-wrap py-6 flex-none">
            <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
            <div className="flex gap-2">
              <Button as="a" href="/projects" variant="outline" className="border-sunset-peach/40">← Back</Button>
              {project.embedUrl && (
                <Button as="a" href={project.embedUrl} target="_blank" variant="peach">Open fullscreen</Button>
              )}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-sunset-brown/40 shadow-lg bg-sunset-brown/40 flex-1 min-h-0 mb-3">
            {project.embedUrl ? (
              <iframe src={project.embedUrl} title={project.title} className="w-full h-full bg-white" />
            ) : (
              <div className="p-6 text-sunset-peach/80">No embedded content configured.</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
