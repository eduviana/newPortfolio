"use client";

import { usePathname } from "next/navigation";
import Slider from "../components/slider/Slider";
import { getProjectBySlug } from "../helpers/getProject";
import { textWithBreaks } from "../helpers/textWithBreaks";
import { Back } from "../components/back/Back";

export default function ProjectDetailsPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop(); // ej: "vivarium"
  const project = getProjectBySlug(slug || "");
  console.log(project);

  if (!project) return <h1>Proyecto no encontrado</h1>;

  const {
    id,
    title,
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
    <section className="my-12">
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-0 items-center md:mb-8">
        <div className="flex-1 self-start">
          <Back />
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-extrabold">{title}</h2>
        </div>
        <div className="flex-1" /> {/* espacio vacío para balancear */}
      </div>
      <Slider images={images} />
      <div className="flex flex-col md:flex-row-reverse md:justify-between gap-8 md:mt-0">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-lg font-semibold md:hidden">Links</h4>
          <div className="flex items-center gap-6 justify-center">
            <a
              href={liveSiteUrl}
              className="bg-brand-primary text-text-base py-1 px-4 lg:py-2 lg:px-4 rounded-md capitalize hover:bg-brand-hover transition-colors duration-300"
            >
              Ver sitio
            </a>
            <a
              href={githubUrl}
              className="bg-brand-primary text-text-base py-1 px-4 lg:py-2 lg:px-4 rounded-md capitalize hover:bg-brand-hover transition-colors duration-300"
            >
              Repositorio
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-lg font-semibold md:hidden">
            Tecnologías utilizadas
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="bg-white text-text-contrast py-1 px-4 lg:py-2 lg:px-4 rounded-md capitalize"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-24 mb-12 pb-12 border-b-2 border-brand-borderDark">
        <h3 className="text-2xl font-semibold">Objetivo</h3>
        <p className="text-text-muted font-normal">
          {textWithBreaks(explanation)}
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-10 mb-12 pt-0 pb-12 ">
        <h3 className="text-2xl font-semibold">¿Qué aprendí?</h3>
        <p className="text-text-muted font-normal">
          {textWithBreaks(feedback)}
        </p>
      </div>
    </section>
  );
}
