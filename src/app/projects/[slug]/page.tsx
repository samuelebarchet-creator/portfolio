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
  const description = project.metaDescription ?? project.description;
  return {
    title: `${project.company} — Samuele Barchet`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.company} — Samuele Barchet`,
      description,
      url,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const url = `https://www.samuelebarchet.com/projects/${slug}`;
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": url,
        "url": url,
        "name": project.company,
        "description": project.metaDescription ?? project.description,
        "creator": { "@type": "Person", "@id": "https://www.samuelebarchet.com/#person" },
        "dateCreated": project.year,
        "genre": project.tag,
        "about": [
          { "@type": "Thing", "name": project.role },
          { "@type": "Thing", "name": project.tag },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.samuelebarchet.com" },
          { "@type": "ListItem", "position": 2, "name": "Lavori", "item": "https://www.samuelebarchet.com/lavori" },
          { "@type": "ListItem", "position": 3, "name": project.company, "item": url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <ProjectClient project={project} />
    </>
  );
}
