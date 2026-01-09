import ProjectInterface from "@/components/projects/ProjectInterface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my chemical engineering and software optimization projects.",
};

export default function ProjectsPage() {
  return (
    <ProjectInterface/>
  );
}
