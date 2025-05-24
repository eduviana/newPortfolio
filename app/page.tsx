
import { About } from "./components/sections/about/About";
import { Hero } from "./components/sections/hero/Hero";
import { MyProjects } from "./components/sections/my-projects/MyProjects";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <MyProjects />
    </main>
    
  );
}
