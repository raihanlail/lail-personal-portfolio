import SkillsContainer from "@/components/skills/skillsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "My Skills",
}
const page = () => {
    
  return (
    <SkillsContainer/>
  )
}

export default page
