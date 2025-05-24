"use client";
import { useState } from "react";
import { FilterButtons } from "../../filter-buttons/FilterButtons";
import Title from "../../title/Title";
import { ProjectCard } from "../../project-card/ProjectCard";
import {projects} from "../../../projects-data/data"

export const MyProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredProjects =
    selectedFilter === "Todos"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedFilter)
        );
  return (
    <div className="my-48" id="my-projects">
      <Title
        title="Mis Proyectos"
        description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
      />
      <FilterButtons
        selectedFilter={selectedFilter}
        onChange={handleFilterChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16 my-14">
       {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project}/>
       ))}
      </div>
    </div>
  );
};
