import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject, getRelated } from "@/lib/projects";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return {
    title: `${project.name.en} | ${project.name.ar} — Nawah Real Estate`,
    description: project.desc.en,
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  const related = getRelated(id);
  return <ProjectDetailPage project={project} related={related} />;
}
