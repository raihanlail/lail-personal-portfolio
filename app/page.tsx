import AboutButton from "@/components/aboutButton";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SkillsButton from "@/components/skillsButton";
import SkillsTitle from "@/components/skillsTitle";



export default function Home() {
  return (
   <div>
    <Intro/>
    <Projects/>
    <SkillsTitle />
    <Skills/>
    <SkillsButton/>
    <Experiences/>
    <AboutButton/>
    
    
   </div>
  );
}
