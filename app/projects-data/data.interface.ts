export interface Project {
  id: number;
  title: string;
  slug: string;
  liveSiteUrl: string;
  githubUrl: string;
  source: string;
  desc: string;
  explanation: string;
  level: string;
  technologies: string[];
  feedback: string;
  image: string;
  images: string[];
}