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
  

  if (!project) return <h1>Proyecto no encontrado</h1>;

  const {
    title,
    liveSiteUrl,
    githubUrl,
    explanation,
    technologies,
    feedback,
    images,
  } = project;

  return (
    <section className="my-8">
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-0 items-center md:mb-8">
        <div className="flex-1 self-start">
          <Back />
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-extrabold">{title}</h2>
        </div>
        <div className="flex-1" />
      </div>

      {/* <div className="max-w-screen-xl mx-auto px-4"> */}
      <div className="w-full">
        <Slider images={images} />

        <div className="flex flex-col md:flex-row md:justify-between md:items-start max-w-[1200px] mx-auto mt-4">
          {/* Bloque de tecnologías */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="text-lg font-semibold md:hidden">
              Tecnologías utilizadas
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
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
          {/* Bloque de botones */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h4 className="text-lg font-semibold md:hidden">Links</h4>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <a
                href={liveSiteUrl}
                className="bg-brand-primary text-text-base py-1 px-4 lg:py-2 lg:px-4 rounded-md capitalize hover:bg-brand-hover transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver sitio
              </a>
              <a
                href={githubUrl}
                className="bg-brand-primary text-text-base py-1 px-4 lg:py-2 lg:px-4 rounded-md capitalize hover:bg-brand-hover transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositorio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resto de la página */}
      <div className="flex flex-col gap-6 mt-24 mb-12 pb-12 border-b-2 border-brand-borderDark max-w-screen-xl mx-auto px-4">
        <h3 className="text-2xl font-semibold">Objetivo</h3>
        <p className="text-text-muted font-normal">
          {textWithBreaks(explanation)}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-10 mb-12 pt-0 pb-12 max-w-screen-xl mx-auto px-4">
        <h3 className="text-2xl font-semibold">¿Qué aprendí?</h3>
        <p className="text-text-muted font-normal">
          {textWithBreaks(feedback)}
        </p>
      </div>
    </section>
  );
}
