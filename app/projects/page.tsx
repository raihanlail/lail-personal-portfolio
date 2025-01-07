import ProjectContainer from "@/components/projects/projectContainer";
import ProjectTitle from "@/components/projects/projectTitle";
import Back from "@/components/back/back";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description: "My projects that i have done",
  keywords: "Projects, My projects, Raihan Lail Ramadhan",
};

const page = () => {
  return (
    <div className="py-40 sm:py-0" id="Projects">
      <section className="sm:py-[6.6rem]">
        <div className="sm:py-10">
          <ProjectTitle />
        </div>
        <ProjectContainer />
      </section>
      <Back />
    </div>
  );
};

export default page;
