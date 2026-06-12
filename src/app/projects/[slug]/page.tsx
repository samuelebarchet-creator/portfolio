import { notFound } from 'next/navigation';
import { getProject, projects } from '@/lib/projects';
import ProjectClient from './ProjectClient';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `https://www.samuelebarchet.com/projects/${slug}`;
  return {
    title: `${project.company} — Samuele Barchet`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.company} — Samuele Barchet`,
      description: project.description,
      url,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return <ProjectClient project={project} />;
}
