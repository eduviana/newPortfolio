import { Project } from "@/app/projects-data/data.interface";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    id,
    title,
    slug,
    liveSiteUrl,
    githubUrl,
    source,
    desc,
    explanation,
    level,
    technologies,
    feedback,
    image,
    images,
  } = project;

  

  return (
    <Link href={`${slug}`}>
      <div className="flex flex-col">
      <div className="relative w-full aspect-[4/3] border border-brand-borderLight rounded-sm overflow-hidden">
        <Image src={image} alt={title} fill className="rounded-sm" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-bold text-lg text-orange-500">{title}</h3>
        <h4 className="text-lg font-normal text-text-muted">{desc}</h4>
      </div>
    </div>
    </Link>
  );
};
