import AboutButton from "@/components/about/aboutButton";
import Experiences from "@/components/experience/experiences";
import Intro from "@/components/intro/intro";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import SkillsButton from "@/components/skills/skillsButton";
import SkillsTitle from "@/components/skills/skillsTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  
  description: "Raihan Lail Ramadhan, a Full-Stack Web Developer",
  keywords: "Raihan Lail Ramadhan",
};
export default function Home() {
  return (
    <div>
      <Intro />
      <Projects />
      <SkillsTitle />
      <Skills />
      <SkillsButton />
      <Experiences />
      <AboutButton />
    </div>
  );
}
