import {projects} from "../projects-data/data"


export const getProjectBySlug = (slug: string ) => {
return projects.find((project) => project.slug === slug)
}