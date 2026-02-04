'use client'
import GradualBlur from "@/components/GradualBlur.jsx";
import Projects from "@/components/Projects.jsx";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {

  return (
    <>
      <div id="gradual-blur">
      <GradualBlur
        target="page"
        position="top"
        height="8.5rem"
        strength={1.5}
        divCount={6.0}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
      </div>
      <Navbar />
      <Projects  />
    </>
  );
}
